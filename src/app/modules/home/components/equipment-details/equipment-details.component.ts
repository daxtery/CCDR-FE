import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.sass']
})
export class EquipmentDetailsComponent {

  @Input() equipment!: Equipment;

  constructor() { }

}
