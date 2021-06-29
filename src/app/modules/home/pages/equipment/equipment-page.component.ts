import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentDetailsService } from 'src/app/core/services/equipment-details-service';

import { Equipment } from 'src/app/shared/types';


@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.sass']
})
export class EquipmentDetailsPageComponent implements OnInit {

  equipment?: Equipment;

  constructor(private equipmentDetailsService: EquipmentDetailsService, private route: ActivatedRoute) {
    equipmentDetailsService.selected.subscribe({
      next: (data) => { this.equipment = data; }
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.equipmentDetailsService.set(id);
    });
  }

}
