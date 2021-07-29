import { Component, Input, OnInit } from '@angular/core';
import { SportDetails, Equipment, CommunicationDetails, InternetDetails, MailDetails, TelephoneDetails, TVDetails, CommunicationDetailsOfType } from 'src/app/shared/types';

@Component({
  selector: 'app-communication-details',
  templateUrl: './infrastructure-communication-details.component.html',
  styleUrls: ['./infrastructure-communication-details.component.sass']
})
export class CommunicationDetailsComponent {

  @Input() details;

  constructor() { }

  isTelephone(obj: CommunicationDetails): obj is CommunicationDetailsOfType<TelephoneDetails> {
    return obj.tipo_comunicacao === "telefone";
  }

  isInternet(obj: CommunicationDetails): obj is CommunicationDetailsOfType<InternetDetails> {
    return obj.tipo_comunicacao === "internet";
  }

  isMail(obj: CommunicationDetails): obj is CommunicationDetailsOfType<MailDetails> {
    return obj.tipo_comunicacao === "correio";
  }

  isTV(obj: CommunicationDetails): obj is CommunicationDetailsOfType<TVDetails> {
    return obj.tipo_comunicacao === "televisao";
  }


}
