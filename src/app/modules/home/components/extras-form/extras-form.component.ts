import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Extra } from 'src/app/shared/types';





interface IExtraFormGroup extends FormGroup {
  value: Extra;

  controls: {
    name: FormControl;
    value: FormControl;
  };
}

interface IExtraFormArray extends FormArray {
  controls: IExtraFormGroup[];

  push(group: IExtraFormGroup): void;
}

interface IExtrasFormGroup extends FormGroup {
  value: { extras: Extra[] };

  controls: {
    extras: IExtraFormArray;
  };
}


@Component({
  selector: 'app-extras-form',
  templateUrl: './extras-form.component.html',
  styleUrls: ['./extras-form.component.sass']
})
export class ExtrasFormComponent {

  form: IExtrasFormGroup;

  constructor(private formBuilder: FormBuilder) { }

  createGroup(): any {
    this.form = this.formBuilder.group({
      extras: this.formBuilder.array([]),
    }) as IExtrasFormGroup;

    return this.form;
  }

  newExtraControl() {
    this.form.controls.extras.push(
      this.formBuilder.group({
        name: '',
        value: '',
      }) as IExtraFormGroup
    );
  }

  deleteExtraControl(index: number) {
    this.form.controls.extras.removeAt(index);
  }

  getFormData() {
    return this.form.value["extras"];
  }


}
