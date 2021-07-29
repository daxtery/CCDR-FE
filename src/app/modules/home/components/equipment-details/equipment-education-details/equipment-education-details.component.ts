import { Component, Input, OnInit } from '@angular/core';
import { EducationDetails, Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-education-details',
  templateUrl: './equipment-education-details.component.html',
  styleUrls: ['./equipment-education-details.component.sass']
})
export class EducationDetailsComponent {

  @Input() details;

  constructor() { }

}
