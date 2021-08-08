import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { concatMap, debounceTime, map, startWith } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

    this.searchFormGroup.controls['searchValue'].valueChanges.pipe(
      startWith(""),
      debounceTime(this.debounceMs),
      concatMap((value) => this.getQuerySuggestions(value))
    ).subscribe(this.suggestions$);

  }

  onFocus() {

    this.dropdownVisible = (true && (this.router.url === '/home'));
  }

  onFocusOut() {

    this.dropdownVisible = false;
  }

  applyBorder() {

    return this.router.url !== '/home';
  }

  search() {

    const searchValue = this.searchFormGroup.get('searchValue').value;

    if (searchValue === '') {
      return;
    }

    this.searchService.searchEquipments(searchValue);

    if (this.router.url === '/home' || this.router.url.match('/home/equipment/*') != []) {

      this.router.navigate(['/home/search'])
    }
  }

  getQuerySuggestions(searchValue: string) {
    if (searchValue === "") {
      return this.searchService.getLastNUniqueQueries(this.suggestionCount);
    }

    return this.searchService.queryEquipments(searchValue, this.suggestionCount).pipe(map(r => r.map(v => v.equipment.name)));
  }
}
