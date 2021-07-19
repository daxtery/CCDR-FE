import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.sass']
})
export class HealthFormComponent implements OnInit {

  healthFormGroup: FormGroup;
  generalHealthForm: FormGroup;
  hospitalHealthForm: FormGroup;

  especialidades: Array<string> = [];
  unidades: Array<string> = [];
  valencias: Array<string> = [];

  equipmentos_por_especialidade: Map<string, number> = new Map<string, number>();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {

    this.healthFormGroup = this.formbuilder.group({

      num_utentes: [''],
      tipo_saude: [''],
      saude_geral: this.createGeneralHealthGroup(),
      saude_hospitalar: this.createHospitalHealthGroup()
    })

    return this.healthFormGroup
  }

  createGeneralHealthGroup() {

    this.generalHealthForm = this.formbuilder.group({

      capacidade: [''],
      num_centros_saude: [''],
    })
  }

  createHospitalHealthGroup() {

    this.hospitalHealthForm = this.formbuilder.group({

      num_equipamentos_por_especialidade: this.formbuilder.group({
        especialidade: [''],
        num_equipamentos: ['']
      }),
      tipo_unidades: [''],
      agrupamento_saude: [''],
      centro_hospitalar: [''],
      valencias: [''],
      especialidades: ['']
    })
  }

  addEquipmentBySpecialty() {

    const { especialidade, num_equipamentos } = this.hospitalHealthForm.get('num_equipamentos_por_especialidade').value

    this.equipmentos_por_especialidade.set(especialidade, num_equipamentos)

    this.hospitalHealthForm.reset('num_equipamentos_por_especialidade')
  }

  addSpecialty() {

    this.especialidades.push(this.hospitalHealthForm.get('especialidades').value)

    this.hospitalHealthForm.reset('especialidades')
  }

  addValency() {

    this.valencias.push(this.hospitalHealthForm.get('valencias').value)

    this.hospitalHealthForm.reset('valencias')

  }

  addUnitType() {

    this.unidades.push(this.hospitalHealthForm.get('tipo_unidades').value)

    this.hospitalHealthForm.reset('tipo_unidades')
  }

  currentHealth() {

    return this.healthFormGroup.get('tipo_saude').value;
  }

  getMapAsArray() {

    return Array.from(this.equipmentos_por_especialidade)
  }

  getGeneralFormData() {

    return this.generalHealthForm.value;
  }

  getHospitalFormData() {

    let formData = this.hospitalHealthForm.value;

    formData['num_equipamentos_por_especialidade'] = Array.from(this.equipmentos_por_especialidade)
    formData['tipo_unidades'] = this.unidades
    formData['valencias'] = this.valencias
    formData['especialidades'] = this.especialidades

    // TODO: agrupamento_saude
    // TODO: centro_hospitalar 

    this.equipmentos_por_especialidade.clear()
    this.unidades = []
    this.valencias = []
    this.especialidades = []

    return formData
  }

  getFormData() {

    let formData = this.healthFormGroup.value;

    let details = this.getGeneralFormData();

    if (this.currentHealth() == 'saude_hospitalar') { details = this.getHospitalFormData() }

    return {'num_utentes': formData['num_utentes'], 'tipo_saude': formData['tipo_saude'], 'healh_details': details}
  }

}
