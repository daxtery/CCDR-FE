import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreateEquipmentDto, Extras } from 'src/app/shared/dtos/create-equipment.dto';

import { EquipmentService } from '../../../../core/services/equipment.service';
import { CultureFormComponent } from '../../components/culture-form/culture-form.component';
import { SocialFormComponent } from '../../components/social-form/social-form.component';
import { SportFormComponent } from '../../components/sport-form/sport-form.component';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.sass']
})
export class AddEquipmentComponent implements OnInit {

  @ViewChild(SocialFormComponent, {static: true}) socialForm: SocialFormComponent;
  @ViewChild(CultureFormComponent, {static: true}) cultureForm: CultureFormComponent;
  @ViewChild(SportFormComponent, {static: true}) sportForm: SportFormComponent;

  equipmentFormGroup: FormGroup;

  constructor(private equipmentService: EquipmentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.equipmentFormGroup = this.formBuilder.group({

      area: [''],
      type: [''],
      social: this.socialForm.createGroup(),
      cultura: this.cultureForm.createGroup(),
      desporto: this.sportForm.createGroup()
    }) 

  }

  currentArea() {

    return this.equipmentFormGroup.get('area').value
  }

  formSubmit() {

    const details = this.equipmentFormGroup.value[this.currentArea()]

    const area = this.equipmentFormGroup.value['area']
    const type = this.equipmentFormGroup.value['type']

    let equipment: CreateEquipmentDto = {area: area, type: type, equipmentDetails: details, extras: { name: '' }}

    this.equipmentService.createEquipment(equipment).subscribe(({ data }) => {

      this.equipmentFormGroup.reset();

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
