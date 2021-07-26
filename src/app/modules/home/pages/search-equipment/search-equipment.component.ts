import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { EquipmentDetailsService } from 'src/app/core/services/equipment-details.service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Equipment, EquipmentAndScore, EquipmentPreview, Group } from 'src/app/shared/types';


@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  searchValue = ''
  queryResults: EquipmentPreview[];

  constructor(
    private searchService: SearchService,
    private feedbackService: FeedbackService,
    private equipmentDetailsService: EquipmentDetailsService,
  ) {
    searchService.searchesObservable.subscribe({
      next: (data) => {
        this.queryResults = data.results.map(v => v.equipment);
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.feedbackService.sendFeedBack();
  }

  search() {
    if (this.searchValue === '') {
      return;
    }

    this.searchService.queryEquipments(this.searchValue);
  }

  markAsClicked(equipment: EquipmentPreview) {
    this.equipmentDetailsService.set_equipment(equipment);

    const { _id } = equipment;
    this.feedbackService.equipmentWasClicked(_id);
  }

}
