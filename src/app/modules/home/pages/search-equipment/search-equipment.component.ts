import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipmentDetailsService } from 'src/app/core/services/equipment-details-service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { FeedBack, QueryFeedBackDto } from 'src/app/shared/dtos/send-feedback.dto';
import { Equipment, EquipmentAndScore, EquipmentPreview } from 'src/app/shared/types';

import { EquipmentService } from '../../../../core/services/equipment.service';


@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  previousSearch = ''

  clickedMap = new Map<string, boolean>();
  scoresMap = new Map<string, number>();

  $queryResults: EquipmentPreview[] = [];

  searchFormGroup: FormGroup;

  constructor(
    private equipmentService: EquipmentService,
    private feedbackService: FeedbackService,
    private equipmentDetailsService: EquipmentDetailsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({

      searchValue: ['']
    })

    this.equipmentService.getLastNQueries(5).subscribe(({ data }) => {
      console.log(data.lastNUniqueQueries);
    })
  }

  ngOnDestroy(): void {

    this.sendQueriesFeedback();
  }

  search() {

    this.sendQueriesFeedback();

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

    }

  }

  markAsClicked(equipment: EquipmentPreview) {
    this.equipmentDetailsService.set_equipment(equipment);

    const { _id } = equipment;
    this.clickedMap.set(_id, true);
  }

  sendQueriesFeedback() {

    if (this.$queryResults.length != 0) {

      const query = this.previousSearch;

      const feedbacks = this.$queryResults.
        map(({ _id }) => {
          return <FeedBack>{
            _id: _id,
            clicked: this.clickedMap.get(_id),
            score: this.scoresMap.get(_id)
          }
        })

      const queryFeedBack = { query: query, feedBacks: feedbacks }

      this.feedbackService.sendFeedBack(queryFeedBack).subscribe(({ data }) => {

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    }
  }

}
