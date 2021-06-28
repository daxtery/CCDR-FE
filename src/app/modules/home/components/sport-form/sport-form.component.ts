import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sport-form',
  templateUrl: './sport-form.component.html',
  styleUrls: ['./sport-form.component.sass']
})
export class SportFormComponent implements OnInit {

  sportFormGroup: FormGroup;
  facilities: Array<string> = [];

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {

    this.sportFormGroup = this.formbuilder.group({

      capacidade: [''],
      iluminado: [''],
      mobilidade_reduzida_pratica: [''],
      mobilidade_reduzida_assitencia: [''],
      instalacao_apoio: ['']
    })

    return this.sportFormGroup
  }

  addFacility() {

    this.facilities.push(this.sportFormGroup.get('instalacao_apoio').value)
  }

  getFormData() {

    let formValue = this.sportFormGroup.value

    formValue['instalacao_apoio'] = this.facilities

    this.facilities = []

    return formValue;
  }


}
