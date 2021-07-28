import { Component, Input } from '@angular/core';
import type { EquipmentPreview } from "../../../../shared/types";

@Component({
  selector: 'app-equipment-preview',
  templateUrl: './equipment-preview.component.html',
  styleUrls: ['./equipment-preview.component.sass']
})
export class EquipmentPreviewComponent {

  @Input() equipment!: EquipmentPreview;

  icon = '';

  constructor() { }

  ngOnInit(): void {
    
    this.icon = `url(../../../assets/icons/${this.equipment.group}/${this.equipment.area}.svg)`
  }
}
