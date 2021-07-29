import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from '@apollo/client/utilities';
import { EquipmentDetailsService } from 'src/app/core/services/equipment-details.service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { SearchResults, SearchService } from 'src/app/core/services/search.service';
import {  EquipmentPreview } from 'src/app/shared/types';


@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit, OnDestroy {

  previousSearch = ''

  $queryResults: EquipmentPreview[];

  searchFormGroup: FormGroup;

  constructor(
    private searchService: SearchService,
    private feedbackService: FeedbackService,
    private equipmentDetailsService: EquipmentDetailsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

    this.searchService.searchesObservable.subscribe({
      next: (data) => {
        this.$queryResults = data.results.map(v => v.equipment);
      }
    })
  }

  search() {

    const searchValue = this.searchFormGroup.get('searchValue').value;

    if (searchValue === '') {
      return;
    }

    this.searchService.searchEquipments(searchValue);
  }

  ngOnDestroy(): void {
    this.feedbackService.sendFeedBack();
  }

  markAsClicked(equipment: EquipmentPreview) {
    this.equipmentDetailsService.set_equipment(equipment);

    const { _id } = equipment;
    this.feedbackService.equipmentWasClicked(_id);
  }

}

