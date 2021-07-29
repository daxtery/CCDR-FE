import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { EquipmentPreview } from 'src/app/shared/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  previousSearch = ''

  clickedMap = new Map<string, boolean>();
  scoresMap = new Map<string, number>();
  lastSearch: Array<string>;
  dropdownVisible: boolean = false;

  searchFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

    this.equipmentService.getLastNQueries(5).subscribe(({ data }) => {

      this.lastSearch = data.lastNUniqueQueries;
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
