import { Component, Input, OnInit } from '@angular/core';
import { SportDetails, Equipment, CommunicationDetails } from 'src/app/shared/types';

@Component({
  selector: 'app-sport-details',
  templateUrl: './infrastructure-communication-details.component.html',
  styleUrls: ['./infrastructure-communication-details.component.sass']
})
export class CommunicationDetailsComponent {

  @Input() details!: CommunicationDetails;

  constructor() { }

}
