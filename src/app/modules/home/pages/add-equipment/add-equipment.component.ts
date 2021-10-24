import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CreateEquipmentDto } from 'src/app/shared/dtos/create-equipment.dto';

import { EquipmentService } from '../../../../core/services/equipment.service';
import { CultureFormComponent } from '../../components/equipment-forms/culture-form/culture-form.component';
import { EducationFormComponent } from '../../components/equipment-forms/education-form/education-form.component';
import { HealthFormComponent } from '../../components/equipment-forms//health-form/health-form.component';
import { SocialFormComponent } from '../../components/equipment-forms/social-form/social-form.component';
import { SportFormComponent } from '../../components/equipment-forms/sport-form/sport-form.component';
import { ExtrasFormComponent } from '../../components/extras-form/extras-form.component';
import { EquipmentLocation } from 'src/app/shared/types';

import * as M from 'materialize-css'
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AddEquipmentComponent implements OnInit {
  
  @ViewChild(SocialFormComponent, { static: true }) socialForm: SocialFormComponent;
  @ViewChild(CultureFormComponent, { static: true }) cultureForm: CultureFormComponent;
  @ViewChild(SportFormComponent, { static: true }) sportForm: SportFormComponent;
  @ViewChild(HealthFormComponent, { static: true }) healthForm: HealthFormComponent;
  @ViewChild(EducationFormComponent, { static: true }) educationForm: EducationFormComponent;
  @ViewChild(ExtrasFormComponent, { static: true }) extrasForm: ExtrasFormComponent;

  equipmentFormGroup: FormGroup;

  forms;

  constructor(private equipmentService: EquipmentService, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    M.AutoInit()

    this.equipmentFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      area: ['', Validators.required],
      description: ['', Validators.required],
      location: this.formBuilder.group({
        state: [''],
        city: [''],
        street: [''],
        zipCode: [''],
      }),
      social: this.socialForm.createGroup(),
      cultura: this.cultureForm.createGroup(),
      desporto: this.sportForm.createGroup(),
      saude: this.healthForm.createGroup(),
      educacao: this.educationForm.createGroup(),
      extras: this.extrasForm.createGroup(),
    })

    this.forms = { 'educacao': this.educationForm, 'social': this.socialForm, 'cultura': this.cultureForm, 'desporto': this.sportForm, 'saude': this.healthForm }
   
  }
  
  currentArea() {

    return this.equipmentFormGroup.get('area').value
  }

  formSubmit(formDirective: FormGroupDirective) {
    const details = this.forms[this.currentArea()].getFormData()

    const name = this.equipmentFormGroup.value['name']

    const area = this.equipmentFormGroup.value['area']
    const description = this.equipmentFormGroup.value['description']
    const group: String = 'equipment';
    const location: EquipmentLocation = this.equipmentFormGroup.value['location'];

    const extras = this.extrasForm.getFormData();
    const id = localStorage.getItem('id')

    let equipment: CreateEquipmentDto = { area, group, description, name, equipmentDetails: details, location: location, owner: id, extras };

    this.equipmentService.createEquipment(equipment).subscribe(({ data }) => {

      // NOTE: We do this because the validators from the form don't get reset when we reset the form. This fixes it.
      // https://stackoverflow.com/questions/48216330/angular-5-formgroup-reset-doesnt-reset-validators
      formDirective.resetForm();
      this.equipmentFormGroup.reset();

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
