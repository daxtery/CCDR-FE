import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-culture-form',
  templateUrl: './culture-form.component.html',
  styleUrls: ['./culture-form.component.sass']
})
export class CultureFormComponent implements OnInit {

  cultureFormGroup: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {

    this.cultureFormGroup = this.formbuilder.group({

      acesso_gratuito: [''],
      num_visitantes_medio: [''],
      mobilidade_reduzida: [''],
      tutela: ['']
    })

    return this.cultureFormGroup
  }

  loadData(equipmentDetails) {

    this.cultureFormGroup.get('acesso_gratuito').setValue(equipmentDetails['acesso_gratuito'])
    this.cultureFormGroup.get('num_visitantes_medio').setValue(equipmentDetails['num_visitantes_medio'])
    this.cultureFormGroup.get('mobilidade_reduzida').setValue(equipmentDetails['mobilidade_reduzida'])
    this.cultureFormGroup.get('tutela').setValue(equipmentDetails['tutela'])
  }

  getFormData() {

    return this.cultureFormGroup.value
  }
}
