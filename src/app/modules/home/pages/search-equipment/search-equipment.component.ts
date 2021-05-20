import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '../../../../core/services/equipment.service';

@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  searchValue=''
  $queryResults = []

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
  }

  search() {

    this.equipmentService.queryEquipments(this.searchValue).subscribe(({ data }) => {

      this.$queryResults = data['queryEquipments']

    }, (error) => {
      console.log('there was an error sending the query', error);
    });

    console.log(this.searchValue)
    
    this.searchValue = ''
  }

}
