import { Component, Input, OnInit } from '@angular/core';
import { GroupAreaIconsProvider } from 'src/app/core/services/group-area-icons-provider.service';
import { AreaOfGroup, CommunicationDetails, EnergyDetails, Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.sass']
})
export class EquipmentDetailsComponent {

  @Input() equipment!: Equipment;

  constructor(readonly groupAreaIconsProvider: GroupAreaIconsProvider) { }

  isEquipment(equipment: Equipment): equipment is Equipment<"equipment"> {
    return equipment.group === "equipment";
  }

  isInfra(equipment: Equipment): equipment is Equipment<"infra"> {
    return equipment.group === "infra";
  }

  isEnergy(equipment: Equipment<"infra">): equipment is Equipment<"infra", EnergyDetails> {
    return equipment.area === "energia";
  }

  isCommunication(equipment: Equipment<"infra">): equipment is Equipment<"infra", CommunicationDetails> {
    return equipment.area === "comunicacao";
  }

}
