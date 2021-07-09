import { Component, Input, OnInit } from '@angular/core';
import { CultureDetails, Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-culture-details',
  templateUrl: './equipment-culture-details.component.html',
  styleUrls: ['./equipment-culture-details.component.sass']
})
export class CultureDetailsComponent {

  @Input() details!: CultureDetails;

  constructor() { }

}
