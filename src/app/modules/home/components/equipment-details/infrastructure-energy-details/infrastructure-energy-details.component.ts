import { Component, Input, OnInit } from '@angular/core';
import { SportDetails, Equipment, EnergyDetails, GasDetails, ElectricityDetails } from 'src/app/shared/types';

@Component({
  selector: 'app-energy-details',
  templateUrl: './infrastructure-energy-details.component.html',
  styleUrls: ['./infrastructure-energy-details.component.sass']
})
export class EnergyDetailsComponent {

  @Input() details!: EnergyDetails;

  isGas(obj: EnergyDetails): obj is EnergyDetails<GasDetails> {
    return obj.tipo_energia === "gas";
  }

  isElectricity(obj: EnergyDetails): obj is EnergyDetails<ElectricityDetails> {
    return obj.tipo_energia === "luz";
  }

}
