import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipmentDetailsService } from 'src/app/core/services/equipment-details.service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { SearchService } from 'src/app/core/services/search.service';
import {  EquipmentPreview } from 'src/app/shared/types';


@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  previousSearch = ''

  $queryResults: EquipmentPreview[];

  readonly suggestionCount = 5;
  readonly debounceMs = 200;

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
  }

  search() {

    const searchValue = this.searchFormGroup.get('searhcValue').value;

    if (searchValue === '') {
      return;
    }

    this.searchService.searchEquipments(searchValue);
  }

  markAsClicked(equipment: EquipmentPreview) {
    this.equipmentDetailsService.set_equipment(equipment);

    const { _id } = equipment;
    this.feedbackService.equipmentWasClicked(_id);
  }

}

