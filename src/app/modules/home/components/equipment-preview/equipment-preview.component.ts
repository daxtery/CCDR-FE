import { Component, Input, OnInit } from '@angular/core';
import type { Equipment } from "../../../../shared/types";

@Component({
  selector: 'app-equipment-preview',
  templateUrl: './equipment-preview.component.html',
  styleUrls: ['./equipment-preview.component.sass']
})
export class EquipmentPreviewComponent {

  @Input() equipment!: Equipment;

  constructor() { }


}
