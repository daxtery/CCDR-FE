import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Access } from 'src/app/shared/models/access';
import { ClientNumber } from 'src/app/shared/models/client-number';
import { ActivityConsumption, ElectricConsumption } from 'src/app/shared/models/consumption';
import { Location } from 'src/app/shared/models/location';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-communication-form',
  templateUrl: './communication-form.component.html',
  styleUrls: ['./communication-form.component.sass']
})
export class CommunicationFormComponent implements OnInit {

  energyFormGroup: FormGroup;

  communicationFormGroup: FormGroup;
  telephoneForm: FormGroup;
  internetForm: FormGroup;
  mailForm: FormGroup;
  televisionForm: FormGroup;

  num_lojas_por_operador: Map<string, number> = new Map<string, number>();

  cobertura_operador_regiao: Map<Location, Map<string, number>> = new Map<Location, Map<string, number>>();

  number_posts: Map<Location, Post> = new Map<Location, Post>();
  number_access: Map<Location, Access> = new Map<Location, Access>();
  number_access_100: Map<Location, number> = new Map<Location, number>();
  number_public_posts: Map<Location, number> = new Map<Location, number>();
  number_clients: Map<Location, ClientNumber> = new Map<Location, ClientNumber>();


  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {

    this.communicationFormGroup = this.formbuilder.group({

      num_operadores: [''],
      tipo_comunicacao: [''],
      loja_p_operador: this.formbuilder.group({
        operador: [''],
        quantidade: ['']
      }),
      cobertura_regiao: this.formbuilder.group({
        lat: [''],
        long: [''],
        operador: [''],
        cobertura: ['']
      }),
      telefone: this.createTelephoneGroup()

    })

    return this.energyFormGroup
  }


  createTelephoneGroup() {

    this.telephoneForm = this.formbuilder.group({

      num_postos: this.formbuilder.group({
        lat: [''],
        long: [''],
        tipo: [''],
        quantidade: ['']
      }),
      num_acessos: this.formbuilder.group({
        lat: [''],
        long: [''],
        tipo: [''],
        quantidade: ['']
      }),
      num_acessos_p_100: this.formbuilder.group({
        lat: [''],
        long: [''],
        quantidade: ['']
      }),
      num_postos_publicos: this.formbuilder.group({
        lat: [''],
        long: [''],
        quantidade: ['']
      }),
      num_clientes: this.formbuilder.group({
        lat: [''],
        long: [''],
        tipo: [''],
        quantidade: ['']
      }),
    })
  }

  addShopByOperator() {

    const { operador, quantidade } = this.energyFormGroup.get('loja_p_operador').value;

    this.num_lojas_por_operador.set(operador, quantidade)

    this.energyFormGroup.get('loja_p_operador').reset()
  }

  addOperatorCoverageByLocation() {

    const { lat, long, operador, cobertura } = this.communicationFormGroup.get('cobertura_regiao').value;

    const location: Location = { latitude: lat, longitude: long };

    let regionMap = this.cobertura_operador_regiao.get(location);

    if (regionMap != undefined) {

      regionMap.set(operador, cobertura)
    }

    else {

      let newRegionMap = new Map<string, number>();
      newRegionMap.set(operador, cobertura);

      this.cobertura_operador_regiao.set(location, newRegionMap)
    }

    this.communicationFormGroup.get('cobertura_regiao').reset()
  }

  addNumberOfPost() {

    const { lat, long, tipo, quantidade } = this.telephoneForm.get('num_postos').value;

    const location: Location = { latitude: lat, longitude: long };

    const post: Post = { type: tipo, numPosts: quantidade };

    this.number_posts.set(location, post);
  }

  addNumberOfAccesses() {

    const { lat, long, tipo, quantidade } = this.telephoneForm.get('num_acessos').value;

    const location: Location = { latitude: lat, longitude: long };

    const access: Access = { type: tipo, numAccess: quantidade };

    this.number_access.set(location, access);
  }

  addNumberOfAccessesBy100() {

    const { lat, long, quantidade } = this.telephoneForm.get('num_acessos_p_100').value;

    const location: Location = { latitude: lat, longitude: long };

    this.number_access_100.set(location, quantidade);
  }

  addNumberOfPublicPosts() {

    const { lat, long, quantidade } = this.telephoneForm.get('num_postos_publicos').value;

    const location: Location = { latitude: lat, longitude: long };

    this.number_public_posts.set(location, quantidade)
  }

  addNumberOfClients() {

    const { lat, long, tipo, quantidade } = this.telephoneForm.get('num_clientes').value;

    const location: Location = { latitude: lat, longitude: long };

    const numClients : ClientNumber = {type: tipo, num: quantidade};

    this.number_clients.set(location, numClients);
  }

  getNumberOfPost() {

    return Array.from(this.number_posts);
  }

  getNumberOfAccesses() {

    return Array.from(this.number_access);
  }

  getNumberOfAccessesBy100() {

    return Array.from(this.number_access_100);
  }

  getNumberOfPublicPosts() {

    return Array.from(this.number_public_posts);
  }

  getNumberOfClients() {

    return Array.from(this.number_clients);
  }

  currentCommunication() {

    return this.communicationFormGroup.get('tipo_comunicacao').value;
  }

  getShopsByOperator() {

    return Array.from(this.num_lojas_por_operador)
  }

  getOperatorCoverageByLocation() {

    const cobertura = Array.from(this.cobertura_operador_regiao)

    const mappedCoberture = cobertura.map((instance) => {

      let { latitude, longitude } = instance[0]
      let region = instance[1]

      return { latitude: latitude, longitude: longitude, region: Array.from(region) }
    })

    return mappedCoberture
  }

  getTelephoneFormData() {


  }

  getFormData() {

    let formData = this.energyFormGroup.value;

    const lojas_por_operador = this.getShopsByOperator();
    const cobertura_por_operador = this.getOperatorCoverageByLocation();

    let details;

    switch (this.currentCommunication()) {
      case 'telefone':

        details = this.getTelephoneFormData()
        break;

      case 'internet':

        break;

      default:
        break;
    }

    this.num_lojas_por_operador.clear();
    this.cobertura_operador_regiao.clear();

    return {
      'num_operadores': formData['num_operadores'],
      'tipo_comunicacao': formData['tipo_comunicacao'],
      'lojas_por_operador': lojas_por_operador,
      'cobertura_por_operador': cobertura_por_operador,
      'communication_details': details
    }
  }

}
