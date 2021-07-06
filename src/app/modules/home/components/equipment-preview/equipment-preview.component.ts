import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import type { Equipment, EquipmentPreview } from "../../../../shared/types";

@Component({
  selector: 'app-equipment-preview',
  templateUrl: './equipment-preview.component.html',
  styleUrls: ['./equipment-preview.component.sass']
})
export class EquipmentPreviewComponent {

  @Input() equipment!: EquipmentPreview;

  constructor() { }


}
