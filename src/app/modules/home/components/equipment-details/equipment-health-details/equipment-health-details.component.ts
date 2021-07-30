import { Component, Input, OnInit } from '@angular/core';
import { HealthDetails, Equipment, GeneralHealthDetails, HospitalHealthDetails, HealthDetailsOfType } from 'src/app/shared/types';

@Component({
  selector: 'app-health-details',
  templateUrl: './equipment-health-details.component.html',
  styleUrls: ['./equipment-health-details.component.sass']
})
export class HealthDetailsComponent implements OnInit {

  @Input() details;

  constructor() { }

  ngOnInit(): void { }


  isHospital(obj: HealthDetails): obj is HealthDetailsOfType<HospitalHealthDetails> {
    return obj.tipo_saude === "saude_hospitalar";
  }

  isGeneral(obj: HealthDetails): obj is HealthDetailsOfType<GeneralHealthDetails> {
    return obj.tipo_saude === "saude_geral";
  }

}
