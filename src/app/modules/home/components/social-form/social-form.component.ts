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
