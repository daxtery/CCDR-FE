import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchoolDetails } from 'src/app/shared/types';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.sass']
})
export class EducationFormComponent implements OnInit {

  educationFormGroup: FormGroup;
  schools: Array<SchoolDetails> = [];

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {

    this.educationFormGroup = this.formbuilder.group({

      escolas: this.formbuilder.group({

        num_alunos: [''],
        capacidade: [''],
        grau_ensino: [''],
      })
    })

    return this.educationFormGroup
  }

  addSchool() {

    const {num_alunos, capacidade, grau_ensino} = this.educationFormGroup.get('escolas').value

    this.schools.push({'num_alunos': num_alunos, 'capacidade': capacidade, 'grau_ensino': grau_ensino})

    this.educationFormGroup.reset('escolas')
  }

  getFormData() {

    let formData = this.educationFormGroup.value

    formData['escolas'] = this.schools

    this.schools = []

    return formData
  }

}
