import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sport-form',
  templateUrl: './sport-form.component.html',
  styleUrls: ['./sport-form.component.sass']
})
export class SportFormComponent implements OnInit {

  sportFormGroup: FormGroup;

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

}
