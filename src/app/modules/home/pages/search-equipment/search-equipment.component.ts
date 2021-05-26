import { Component, OnInit, SimpleChanges } from '@angular/core';

import { EquipmentService } from '../../../../core/services/equipment.service';

@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  searchValue = ''
  $queryResults = []

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {


  }

  search() {

    if (this.searchValue != '') {

      this.equipmentService.queryEquipments(this.searchValue).subscribe(({ data }) => {

        this.$queryResults = data['queryEquipments'].map((query) => {

          return { result: query, clicked: false }
        })

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

      this.searchValue = ''
    }

  }

  markAsClicked(id) {

    let clickedItem = this.$queryResults.find((query) => { return query.result._id == id });

    clickedItem.clicked = true;
  }

  sendQueriesFeedback() {


  }

}
