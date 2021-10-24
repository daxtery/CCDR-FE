import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { UserService } from 'src/app/core/services/user.service';
import { CreateEquipmentDto } from 'src/app/shared/dtos/create-equipment.dto';
import { EquipmentLocation } from 'src/app/shared/types';
import { CommunicationFormComponent } from '../../components/infrastructure-form/communication-form/communication-form.component';
import { EnergyFormComponent } from '../../components/infrastructure-form/energy-form/energy-form.component';

@Component({
  selector: 'app-add-infraestructure',
  templateUrl: './add-infraestructure.component.html',
  styleUrls: ['./add-infraestructure.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AddInfraestructureComponent implements OnInit {

  @ViewChild(EnergyFormComponent, { static: true }) energyForm: EnergyFormComponent;
  @ViewChild(CommunicationFormComponent, { static: true }) communicationForm: CommunicationFormComponent;

  infrastructureFormGroup: FormGroup;

  forms;

  constructor(private equipmentService: EquipmentService, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.infrastructureFormGroup = this.formBuilder.group({
      name: [''],
      area: [''],
      description: [''],
      location: this.formBuilder.group({
        state: [''],
        city: [''],
        street: [''],
        zipCode: [''],
      }),
      energia: this.energyForm.createGroup(),
      comunicacao: this.communicationForm.createGroup()

    })

    this.forms = { 'energia': this.energyForm, 'comunicacao': this.communicationForm }

  }

  currentArea() {

    return this.infrastructureFormGroup.get('area').value
  }

  formSubmit(formDirective: FormGroupDirective) {

    const details = this.forms[this.currentArea()].getFormData()

    const name = this.infrastructureFormGroup.value['name']

    const area = this.infrastructureFormGroup.value['area']
    const description = this.infrastructureFormGroup.value['description']
    const location: EquipmentLocation = this.infrastructureFormGroup.value['location']

    const group = 'infra';

    const id = localStorage.getItem('id')

    let equipment: CreateEquipmentDto = { area, group, description, name, equipmentDetails: details, location, owner: id, extras: [] }

    this.equipmentService.createEquipment(equipment).subscribe(({ data }) => {

      this.infrastructureFormGroup.reset();

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
