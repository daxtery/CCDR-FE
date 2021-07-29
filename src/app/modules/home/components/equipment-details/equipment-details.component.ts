import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GroupAreaIconsProvider } from 'src/app/core/services/group-area-icons-provider.service';
import { CommunicationDetails, EnergyDetails, Equipment, EquipmentOfArea, EquipmentOfGroup } from 'src/app/shared/types';
=======
import { AreaOfGroup, CommunicationDetails, EnergyDetails, Equipment } from 'src/app/shared/types';
>>>>>>> UI

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.sass']
})
export class EquipmentDetailsComponent {

  @Input() equipment!: Equipment;

  constructor() { }

  isEquipment(equipment: Equipment): equipment is EquipmentOfGroup<"equipment"> {
    return equipment.group === "equipment";
  }

  isCulture(equipment: EquipmentOfGroup<"equipment">): equipment is EquipmentOfArea<"cultura"> {
    return equipment.area === "cultura";
  }

  isSport(equipment: EquipmentOfGroup<"equipment">): equipment is EquipmentOfArea<"desporto"> {
    return equipment.area === "desporto";
  }

  isSocial(equipment: EquipmentOfGroup<"equipment">): equipment is EquipmentOfArea<"social"> {
    return equipment.area === "social";
  }

  isHealth(equipment: EquipmentOfGroup<"equipment">): equipment is EquipmentOfArea<"saude"> {
    return equipment.area === "saude";
  }

  isEducation(equipment: EquipmentOfGroup<"equipment">): equipment is EquipmentOfArea<"educacao"> {
    return equipment.area === "educacao";
  }

  isInfra(equipment: Equipment): equipment is EquipmentOfGroup<"infra"> {
    return equipment.group === "infra";
  }

  isEnergy(equipment: EquipmentOfGroup<"infra">): equipment is EquipmentOfArea<"energia"> {
    return equipment.area === "energia";
  }

  isCommunication(equipment: EquipmentOfGroup<"infra">): equipment is EquipmentOfArea<"comunicacao"> {
    return equipment.area === "comunicacao";
  }

}
