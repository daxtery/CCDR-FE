import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounce, debounceTime } from 'rxjs/operators';
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

  control = new FormControl();
  suggestions$: Observable<string[]>;

  queryResults: EquipmentPreview[];

  readonly suggestionCount = 5;
  readonly debounceMs = 200;

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

    this.control.valueChanges.pipe(
      startWith(""),
      debounceTime(this.debounceMs),
    ).subscribe({
      next: (value) => { this.suggestions$ = this.getQuerySuggestions(value); }
    });
  }

  ngOnInit(): void {
  }

  getQuerySuggestions(searchValue: string) {
    if (searchValue === "") {
      return this.searchService.getLastNUniqueQueries(this.suggestionCount);
    }

    return this.searchService.queryEquipments(searchValue, this.suggestionCount).pipe(map(r => r.map(v => v.equipment.name)));
  }

  ngOnDestroy(): void {
    this.feedbackService.sendFeedBack();
  }

  search() {
    if (this.control.value === '') {
      return;
    }

    this.searchService.searchEquipments(this.control.value);
  }

  markAsClicked(equipment: EquipmentPreview) {
    this.equipmentDetailsService.set_equipment(equipment);

    const { _id } = equipment;
    this.feedbackService.equipmentWasClicked(_id);
  }

}

