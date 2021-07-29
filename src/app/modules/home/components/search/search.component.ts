import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { debounceTime, map, mergeAll, startWith } from 'rxjs/operators';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { SearchService } from 'src/app/core/services/search.service';
import { EquipmentPreview } from 'src/app/shared/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  dropdownVisible: boolean = false;

  searchFormGroup: FormGroup;

  readonly debounceMs = 200;
  readonly suggestionCount = 5;

  suggestions$: ReplaySubject<Array<string>> = new ReplaySubject(this.suggestionCount);

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

    this.searchFormGroup.controls['searchValue'].valueChanges.pipe(
      startWith(""),
      debounceTime(this.debounceMs),
      map(value => this.getQuerySuggestions(value)),
      mergeAll()
    ).subscribe(this.suggestions$);

  }

  onFocus() {

    this.dropdownVisible = true;
  }

  onFocusOut() {

    this.dropdownVisible = false;
  }

  search() {
    console.log("Goooo")

  }

  getQuerySuggestions(searchValue: string) {
    if (searchValue === "") {
      return this.searchService.getLastNUniqueQueries(this.suggestionCount);
    }

    return this.searchService.queryEquipments(searchValue, this.suggestionCount).pipe(map(r => r.map(v => v.equipment.name)));
  }
}
