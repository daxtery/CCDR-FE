import { Component, Input, OnInit } from '@angular/core';
import { SportDetails, Equipment, EnergyDetails, GasDetails, ElectricityDetails, EnergyDetailsOfType } from 'src/app/shared/types';

@Component({
  selector: 'app-energy-details',
  templateUrl: './infrastructure-energy-details.component.html',
  styleUrls: ['./infrastructure-energy-details.component.sass']
})
export class EnergyDetailsComponent {

  @Input() details;

  isGas(obj: EnergyDetails): obj is EnergyDetailsOfType<GasDetails> {
    return obj.tipo_energia === "gas";
  }

  isElectricity(obj: EnergyDetails): obj is EnergyDetailsOfType<ElectricityDetails> {
    return obj.tipo_energia === "luz";
  }

}
