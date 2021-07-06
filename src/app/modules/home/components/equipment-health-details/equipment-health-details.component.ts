import { Component, Input, OnInit } from '@angular/core';
import { HealthDetails, Equipment, GeneralHealthDetails, HospitalHealthDetails } from 'src/app/shared/types';

@Component({
  selector: 'app-health-details',
  templateUrl: './equipment-health-details.component.html',
  styleUrls: ['./equipment-health-details.component.sass']
})
export class HealthDetailsComponent implements OnInit {

  @Input() details!: HealthDetails;

  constructor() { }

  ngOnInit(): void { }


  isHospital(obj: HealthDetails): obj is HealthDetails<HospitalHealthDetails> {
    return obj.tipo_saude === "saude_hospitalar";
  }

  isGeneral(obj: HealthDetails): obj is HealthDetails<GeneralHealthDetails> {
    return obj.tipo_saude === "saude_geral";
  }

}
