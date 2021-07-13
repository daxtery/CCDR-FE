import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Access } from 'src/app/shared/models/access';
import { ClientNumber } from 'src/app/shared/models/client-number';
import { Company } from 'src/app/shared/models/company';
import { ActivityConsumption, ElectricConsumption } from 'src/app/shared/models/consumption';
import { Location } from 'src/app/shared/models/location';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-communication-form',
  templateUrl: './communication-form.component.html',
  styleUrls: ['./communication-form.component.sass']
})
export class CommunicationFormComponent implements OnInit {

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

  number_clients_free_band: Map<string, number> = new Map<string, number>();
  number_access_free_band_100: Map<string, number> = new Map<string, number>();
  number_access_free_band: Map<Location, Access> = new Map<Location, Access>();

  information_by_company: Map<Location, Company> = new Map<Location, Company>();
  number_mail_stations: Map<string, number> = new Map<string, number>();
  number_mail_posts: Map<string, number> = new Map<string, number>();

  number_subscriptions: Map<Location, number> = new Map<Location, number>();
  number_tv_clients: Map<string, number> = new Map<string, number>();

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
      telefone: this.createTelephoneGroup(),
      internet: this.createInternetGroup(),
      correio: this.createMailGroup(),
      televisao: this.createTVGroup(),
    })

    return this.communicationFormGroup
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

  createInternetGroup() {

    this.internetForm = this.formbuilder.group({

      num_clientes_banda_larga: this.formbuilder.group({

        operador: [''],
        quantidade: [''],
      }),

      num_acessos_banda_larga_100: this.formbuilder.group({

        tipo: [''],
        quantidade: [''],
      }),

      num_acessos_banda_larga: this.formbuilder.group({

        lat: [''],
        long: [''],
        tipo: [''],
        quantidade: ['']
      }),

      populacao_4g: ['']
    })
  }

  createMailGroup() {

    this.mailForm = this.formbuilder.group({

      informacao_empresa: this.formbuilder.group({

        lat: [''],
        long: [''],
      }),

      num_estacoes: this.formbuilder.group({

        tipo: [''],
        quantidade: ['']
      }),

      num_postos: this.formbuilder.group({

        tipo: [''],
        quantidade: ['']
      })
    })
  }

  createTVGroup() {

    this.televisionForm = this.formbuilder.group({

      num_subscricoes: this.formbuilder.group({

        lat: [''],
        long: [''],
        quantidade: ['']
      }),
      num_clientes: this.formbuilder.group({

        operador: [''],
        quantidade: ['']
      })
    })
  }

  addTVSubscription() {

    const { lat, long, quantidade } = this.televisionForm.get('num_subscricoes').value;

    const location: Location = { latitude: lat, longitude: long };

    this.number_subscriptions.set(location, quantidade);
  }

  addTVClient() {

    const { operador, quantidade } = this.televisionForm.get('num_clientes').value;

    this.number_tv_clients.set(operador, quantidade);
  }

  addMailStation() {

    const { tipo, quantidade } = this.mailForm.get('num_estacoes').value;

    this.number_mail_stations.set(tipo, quantidade);
  }

  addMailPost() {

    const { tipo, quantidade } = this.mailForm.get('num_postos').value;

    this.number_mail_posts.set(tipo, quantidade);
  }

  addMailInformation() {

    const { lat, long } = this.mailForm.value;

    const location: Location = { latitude: lat, longitude: long };

    const company: Company = { numPosts: this.number_mail_posts, numStations: this.number_mail_stations };

    this.information_by_company.set(location, company);

    this.number_mail_posts.clear();
    this.number_mail_stations.clear();
  }

  addFreeBandClients() {

    const { operador, quantidade } = this.internetForm.get('num_clientes_banda_larga').value;

    this.number_clients_free_band.set(operador, quantidade);
  }

  addFreeBandAccessesBy100() {

    const { tipo, quantidade } = this.internetForm.get('num_acessos_banda_larga_100').value;

    this.number_access_free_band_100.set(tipo, quantidade);
  }

  addFreeBandAccesses() {

    const { lat, long, tipo, quantidade } = this.internetForm.get('num_acessos_banda_larga').value;

    const location: Location = { latitude: lat, longitude: long };

    const access: Access = { type: tipo, numAccess: quantidade };

    this.number_access_free_band.set(location, access);
  }

  addShopByOperator() {

    const { operador, quantidade } = this.communicationFormGroup.get('loja_p_operador').value;

    this.num_lojas_por_operador.set(operador, quantidade)

    this.communicationFormGroup.get('loja_p_operador').reset()
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

    const numClients: ClientNumber = { type: tipo, num: quantidade };

    this.number_clients.set(location, numClients);
  }

  getTVClient() {

    return Array.from(this.number_tv_clients);
  }

  getTVSubscription() {

    return Array.from(this.number_subscriptions);
  }

  getFreeBandClients() {

    return Array.from(this.number_clients_free_band);
  }

  getFreeBandAccesses() {

    return Array.from(this.number_access_free_band);
  }

  getFreeBandAccessesBy100() {

    return Array.from(this.number_access_free_band_100);
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

  getMailStation() {

    return Array.from(this.number_mail_stations);
  }

  getMailPost() {

    return Array.from(this.number_mail_posts);
  }

  getTelephoneFormData() {

    let formData = this.telephoneForm.value;

    const num_postos = this.getNumberOfPost();
    const num_acessos = this.getNumberOfAccesses();
    const num_acessos_p_100 = this.getNumberOfAccessesBy100();
    const num_postos_publicos = this.getNumberOfPublicPosts();
    const num_clientes = this.getNumberOfClients();

    formData['num_postos'] = num_postos;
    formData['num_acessos'] = num_acessos;
    formData['num_acessos_p_100'] = num_acessos_p_100;
    formData['num_postos_publicos'] = num_postos_publicos;
    formData['num_clientes'] = num_clientes;

    this.number_posts.clear();
    this.number_access.clear();
    this.number_access_100.clear();
    this.number_public_posts.clear();
    this.number_clients.clear();

    return formData;
  }

  getInternetFormData() {

    let formData = this.internetForm.value;

    const num_clientes_banda_larga = this.getFreeBandClients();
    const num_acessos_banda_larga_100 = this.getFreeBandAccessesBy100();
    const num_acessos_banda_larga = this.getFreeBandAccesses();

    formData['num_clientes_banda_larga'] = num_clientes_banda_larga;
    formData['num_acessos_banda_larga_100'] = num_acessos_banda_larga_100;
    formData['num_acessos_banda_larga'] = num_acessos_banda_larga;

    this.number_clients_free_band.clear();
    this.number_access_free_band_100.clear();
    this.number_access_free_band.clear();

    return formData
  }

  getMailFormData() {

    let formData = this.mailForm.value;

    formData = Array.from(this.information_by_company);

    this.information_by_company.clear();

    return formData;
  }

  getTVFormData() {

    let formData = this.televisionForm.value;

    formData['num_subscricoes'] = this.getTVSubscription();
    formData['num_clientes'] = this.getTVClient();

    this.number_subscriptions.clear();
    this.number_tv_clients.clear();

    return formData;
  }

  getFormData() {

    let formData = this.communicationFormGroup.value;

    const lojas_por_operador = this.getShopsByOperator();
    const cobertura_por_operador = this.getOperatorCoverageByLocation();

    let details;

    switch (this.currentCommunication()) {
      case 'telefone':

        details = this.getTelephoneFormData();
        break;

      case 'internet':

        details = this.getInternetFormData();
        break;

      case 'correio':

        details = this.getMailFormData();
        break;

      case 'televisao':
        details = this.getTVFormData();
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
