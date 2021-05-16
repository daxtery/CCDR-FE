import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  search_value=''

  constructor() { }

  ngOnInit(): void {
  }

  search() {

    //Some fancy stuff with BE
    console.log(this.search_value)
    
    this.search_value = ''
  }

}
