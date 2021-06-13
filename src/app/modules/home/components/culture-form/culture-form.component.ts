import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
}
