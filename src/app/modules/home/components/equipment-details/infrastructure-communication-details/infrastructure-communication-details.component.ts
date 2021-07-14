import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/shared/models/location';
import { SportDetails, Equipment, CommunicationDetails, InternetDetails, MailDetails, TelephoneDetails, TVDetails } from 'src/app/shared/types';

@Component({
  selector: 'app-communication-details',
  templateUrl: './infrastructure-communication-details.component.html',
  styleUrls: ['./infrastructure-communication-details.component.sass']
})
export class CommunicationDetailsComponent {

  @Input() details!: CommunicationDetails;

  constructor() { }

  isTelephone(obj: CommunicationDetails): obj is CommunicationDetails<TelephoneDetails> {
    return obj.tipo_comunicacao === "telefone";
  }

  isInternet(obj: CommunicationDetails): obj is CommunicationDetails<InternetDetails> {
    return obj.tipo_comunicacao === "internet";
  }

  isMail(obj: CommunicationDetails): obj is CommunicationDetails<MailDetails> {
    return obj.tipo_comunicacao === "correio";
  }

  isTV(obj: CommunicationDetails): obj is CommunicationDetails<TVDetails> {
    return obj.tipo_comunicacao === "televisao";
  }


}
