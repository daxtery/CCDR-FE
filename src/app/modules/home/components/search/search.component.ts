import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  lastSearch: Array<string>;
  dropdownVisible: boolean = false;

  searchFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: SearchService,
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

    this.equipmentService.getLastNUniqueQueries(5).subscribe((data) => {

      this.lastSearch = data;
    })

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
}
