import { Component, Input, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EquipmentDetailsService } from 'src/app/core/services/equipment-details.service';

import { Equipment } from 'src/app/shared/types';


@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.sass']
})
export class EquipmentDetailsPageComponent implements OnInit {
  equipment$: Observable<Equipment>;
  preview: boolean;

  constructor(private equipmentDetailsService: EquipmentDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.preview = params['preview'] === 'true';
      
      this.equipment$ = this.equipmentDetailsService.get_or_fetch_and_set(id);
    });
  }

}
