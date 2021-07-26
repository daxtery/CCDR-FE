import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupAreaIconsProvider } from 'src/app/core/services/group-area-icons-provider.service';
import type { Equipment, EquipmentPreview } from "../../../../shared/types";

@Component({
  selector: 'app-equipment-preview',
  templateUrl: './equipment-preview.component.html',
  styleUrls: ['./equipment-preview.component.sass']
})
export class EquipmentPreviewComponent {

  readonly textCharacterLimit = 360;

  @Input() equipment!: EquipmentPreview;

  constructor(readonly groupAreaIconsProvider: GroupAreaIconsProvider) { }


}
