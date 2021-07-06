import { Component, Input, OnInit } from '@angular/core';
import { SocialDetails, Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-social-details',
  templateUrl: './equipment-social-details.component.html',
  styleUrls: ['./equipment-social-details.component.sass']
})
export class SocialDetailsComponent {

  @Input() details!: SocialDetails;

  constructor() { }

}
