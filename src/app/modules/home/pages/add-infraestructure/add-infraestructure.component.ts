import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { CreateEquipmentDto } from 'src/app/shared/dtos/create-equipment.dto';
import { CommunicationFormComponent } from '../../components/infrastructure-form/communication-form/communication-form.component';
import { EnergyFormComponent } from '../../components/infrastructure-form/energy-form/energy-form.component';

@Component({
  selector: 'app-add-infraestructure',
  templateUrl: './add-infraestructure.component.html',
  styleUrls: ['./add-infraestructure.component.sass']
})
export class AddInfraestructureComponent implements OnInit {

  @ViewChild(EnergyFormComponent, { static: true }) energyForm: EnergyFormComponent;
  @ViewChild(CommunicationFormComponent, { static: true }) communicationForm: CommunicationFormComponent;

  infrastructureFormGroup: FormGroup;

  forms;

  constructor(private equipmentService: EquipmentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.infrastructureFormGroup = this.formBuilder.group({
      name: [''],
      area: [''],
      type: [''],
      energia: this.energyForm.createGroup(),
      comunicacao: this.communicationForm.createGroup()

    })

    this.forms = { 'energia': this.energyForm, 'comunicacao': this.communicationForm }

  }

  currentArea() {

    return this.infrastructureFormGroup.get('area').value
  }

  formSubmit() {

    const details = this.forms[this.currentArea()].getFormData()

    const name = this.infrastructureFormGroup.value['name']

    const area = this.infrastructureFormGroup.value['area']
    const type = this.infrastructureFormGroup.value['type']

    const group = 'infra';

    let equipment: CreateEquipmentDto = { area, group, type, name, equipmentDetails: details, extras: {} }

    this.equipmentService.createEquipment(equipment).subscribe(({ data }) => {

      this.infrastructureFormGroup.reset();

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
