import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  previousSearch = ''

  clickedMap = new Map<string, boolean>();
  scoresMap = new Map<string, number>();

  searchFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

  }

  search() {
    console.log("Goooo")
    /* this.sendQueriesFeedback();

    const searchValue = this.searchFormGroup.get('searchValue').value

    if (searchValue != '') {

      this.scoresMap.clear();
      this.clickedMap.clear();
      this.$queryResults = []

      this.equipmentService.queryEquipments(searchValue).subscribe(({ data }) => {

        data['queryEquipments'].forEach((value) => {
          this.scoresMap.set(value.equipment._id, value.score);
          this.clickedMap.set(value.equipment._id, false);
          this.$queryResults.push(value.equipment);
        })

        this.previousSearch = searchValue;
        this.searchFormGroup.get('searchValue').reset();

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    } */

  }
}
