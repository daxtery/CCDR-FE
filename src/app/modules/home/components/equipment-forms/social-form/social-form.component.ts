import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.sass']
})
export class SocialFormComponent implements OnInit {

  socialFormGroup: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  loadData(equipmentDetails) {

    this.socialFormGroup.get('num_utentes').setValue(equipmentDetails['num_utentes'])
    this.socialFormGroup.get('capacidade').setValue(equipmentDetails['capacidade'])
    this.socialFormGroup.get('fins_lucrativos').setValue(equipmentDetails['fins_lucrativos'])
    this.socialFormGroup.get('organizacao').setValue(equipmentDetails['organizacao'])
  }

  createGroup() {

    this.socialFormGroup = this.formbuilder.group({

      num_utentes: [''],
      capacidade: [''],
      fins_lucrativos: [''],
      organizacao: ['']
    })

    return this.socialFormGroup
  }

  getFormData() {

    return this.socialFormGroup.value
  }

}
