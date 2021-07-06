import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityConsumption, ElectricConsumption } from 'src/app/shared/models/consumption';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-energy-form',
  templateUrl: './energy-form.component.html',
  styleUrls: ['./energy-form.component.sass']
})
export class EnergyFormComponent implements OnInit {

  energyFormGroup: FormGroup;
  gasForm: FormGroup;
  electricityForm: FormGroup;

  num_lojas_por_operador: Map<string, number> = new Map<string, number>();
  num_agentes_por_operador: Map<string, number> = new Map<string, number>();

  num_consumo_gas_por_localizacao: Map<Location, number> = new Map<Location, number>();
  consumo_gas_por_localizacao: Map<Location, number> = new Map<Location, number>();
  pontos_acesso: Map<Location, number> = new Map<Location, number>();


  num_consumo_elec_por_atividade: Map<Location, ActivityConsumption> = new Map<Location, ActivityConsumption>();
  consumo_elec_por_atividade: Map<Location, ElectricConsumption> = new Map<Location, ElectricConsumption>();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {

    this.energyFormGroup = this.formbuilder.group({

      num_operadores: [''],
      tipo_energia: [''],
      loja_p_operador: this.formbuilder.group({
        operador: [''],
        quantidade: ['']
      }),
      agentes_p_operador: this.formbuilder.group({
        operador: [''],
        quantidade: ['']
      }),
      gas: this.createGasGroup(),
      saude_hospitalar: this.createElectricityGroup()
    })

    return this.energyFormGroup
  }

  createGasGroup() {

    this.gasForm = this.formbuilder.group({

      num_consumo_gas: this.formbuilder.group({
        lat: [''],
        long: [''],
        quantidade: ['']
      }),
      consumo_gas: this.formbuilder.group({
        lat: [''],
        long: [''],
        quantidade: ['']
      }),
      pontos_acesso: this.formbuilder.group({
        lat: [''],
        long: [''],
        quantidade: ['']
      }),
      consumo_p_habitante: [''],
      populacao_c_gas_naturaç: ['']
    })
  }

  createElectricityGroup() {

    this.electricityForm = this.formbuilder.group({

      num_consumo_elec_p_atividade: this.formbuilder.group({
        lat: [''],
        long: [''],
        tipo_consumo: [''],
        num_consumidores: ['']
      }),
      consumo_elec_p_atividade: this.formbuilder.group({
        lat: [''],
        long: [''],
        tipo_consumo: [''],
        consumo: ['']
      }),
    })
  }

  addShopByOperator() {

    const { operador, quantidade } = this.energyFormGroup.get('loja_p_operador').value;

    this.num_lojas_por_operador.set(operador, quantidade)

    this.energyFormGroup.get('loja_p_operador').reset()
  }

  addAgentByOperator() {

    const { operador, quantidade } = this.energyFormGroup.get('agentes_p_operador').value;

    this.num_agentes_por_operador.set(operador, quantidade)

    this.energyFormGroup.get('agentes_p_operador').reset()
  }

  addConsumptionByActivity() {

    const {lat, long, tipo_consumo, num_consumidores} = this.electricityForm.get('num_consumo_elec_p_atividade').value;

    const location: Location = {latitude: lat, longitude: long};
    const consumption: ActivityConsumption = {activity: tipo_consumo, numberOfConsumers: num_consumidores};

    this.num_consumo_elec_por_atividade.set(location, consumption);

    this.electricityForm.get('num_consumo_elec_p_atividade').reset()
  }

  addElectricConsumption() {

    const {lat, long, tipo_consumo, consumo} = this.electricityForm.get('consumo_elec_p_atividade').value;

    const location: Location = {latitude: lat, longitude: long};
    const consumption: ElectricConsumption = {activity: tipo_consumo, consumption: consumo};

    this.consumo_elec_por_atividade.set(location, consumption);

    this.electricityForm.get('consumo_elec_p_atividade').reset()
  }

  addNumberOfGasConsumption() {

    const { lat, long, quantidade } = this.gasForm.get('num_consumo_gas').value;

    const location: Location = { latitude: lat, longitude: long }

    this.num_consumo_gas_por_localizacao.set(location, quantidade);

    this.gasForm.get('num_consumo_gas').reset()
  }

  addGasConsumption() {

    const { lat, long, quantidade } = this.gasForm.get('consumo_gas').value;

    const location: Location = { latitude: lat, longitude: long }

    this.consumo_gas_por_localizacao.set(location, quantidade);

    this.gasForm.get('consumo_gas').reset()
  }

  addAccessPoint() {

    const { lat, long, quantidade } = this.gasForm.get('pontos_acesso').value;

    const location: Location = { latitude: lat, longitude: long }

    this.pontos_acesso.set(location, quantidade);

    this.gasForm.get('pontos_acesso').reset()
  }

  currentEnergy() {

    return this.energyFormGroup.get('tipo_energia').value;
  }

  getShopsByOperator() {

    return Array.from(this.num_lojas_por_operador)
  }

  getAgentsByOperator() {

    return Array.from(this.num_agentes_por_operador)
  }

  getElectricConsumption() {

    return Array.from(this.consumo_elec_por_atividade)
  }

  getConsumptionByActivity() {

    return Array.from(this.num_consumo_elec_por_atividade)
  }
 
  getNumberOfGasConsumption() {

    return Array.from(this.num_consumo_gas_por_localizacao)
  }

  getGasConsumption() {

    return Array.from(this.consumo_gas_por_localizacao)
  }

  getAccessPoint() {

    return Array.from(this.pontos_acesso)
  }

  getGasFormData() {

    let formData = this.gasForm.value;

    formData['num_consumo_gas'] = this.getNumberOfGasConsumption()
    formData['consumo_gas'] = this.getGasConsumption()
    formData['pontos_acesso'] = this.getAccessPoint()

    this.num_consumo_gas_por_localizacao.clear()
    this.consumo_gas_por_localizacao.clear()
    this.pontos_acesso.clear()

    return formData
  }

  getElectricityFormData() {

    let formData = this.electricityForm.value;

    formData['num_consumo_elec_p_atividade'] = this.getConsumptionByActivity()
    formData['consumo_elec_p_atividade'] = this.getElectricConsumption()

    this.num_consumo_elec_por_atividade.clear()
    this.consumo_elec_por_atividade.clear()

    return formData
  }

  getFormData() {

    let formData = this.energyFormGroup.value;

    const lojas_por_operador = this.getShopsByOperator();
    const agentes_por_operador = this.getAgentsByOperator();

    let details = this.getGasFormData();

    this.num_lojas_por_operador.clear();
    this.num_agentes_por_operador.clear();

    if (this.currentEnergy() == 'luz') { details = this.getElectricityFormData() }

    return { 'num_operadores': formData['num_operadores'], 
            'tipo_energia': formData['tipo_energia'], 
            'lojas_por_operador': lojas_por_operador,
            'agentes_por_operador': agentes_por_operador,
            'energy_details': details }
  }

}
