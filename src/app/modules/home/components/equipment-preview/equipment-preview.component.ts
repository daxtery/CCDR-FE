import { Component, Input } from '@angular/core';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import type { EquipmentPreview } from "../../../../shared/types";

@Component({
  selector: 'app-equipment-preview',
  templateUrl: './equipment-preview.component.html',
  styleUrls: ['./equipment-preview.component.sass']
})
export class EquipmentPreviewComponent {

  @Input() equipment!: EquipmentPreview;
  @Input() profile: boolean;

  icon = '';

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    
    this.icon = `url(../../../assets/icons/${this.equipment.group}/${this.equipment.area}.svg)`
  }

  deleteEquipment(id: string, user_id: string) {

    this.equipmentService.removeEquipment(id, user_id).subscribe(data => {

      console.log(data)
    })
  }
}
