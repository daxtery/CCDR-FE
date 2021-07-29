import { Component, Input, OnInit } from '@angular/core';
import { SportDetails, Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-sport-details',
  templateUrl: './equipment-sport-details.component.html',
  styleUrls: ['./equipment-sport-details.component.sass']
})
export class SportDetailsComponent {

  @Input() details;

  constructor() { }

}
