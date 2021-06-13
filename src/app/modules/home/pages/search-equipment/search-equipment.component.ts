import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { FeedBack, QueryFeedBackDto } from 'src/app/shared/dtos/send-feedback.dto';

import { EquipmentService } from '../../../../core/services/equipment.service';

@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

  @ViewChild('searchResults') searchResults: MatSelectionList;

  searchValue = ''
  previousSearch = ''
  $queryResults = []

  constructor(private equipmentService: EquipmentService, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

    this.sendQueriesFeedback();
  }

  search() {

    this.sendQueriesFeedback();

    if (this.searchValue != '') {

      this.equipmentService.queryEquipments(this.searchValue).subscribe(({ data }) => {
        
        this.$queryResults = data['queryEquipments'].map((query) => {

          return { result: query, clicked: false }
        })

        this.searchResults.options.forEach( (item: MatListOption) => item.selected = false);

        this.previousSearch = this.searchValue
        this.searchValue = ''
        

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    }

  }

  markAsClicked(id) {

    let clickedItem = this.$queryResults.find((query) => { return query.result.equipment._id == id });

    clickedItem.clicked = true;
  }

  sendQueriesFeedback() {

    if (this.$queryResults.length != 0) {

      const query = this.previousSearch;

      const feedbacks: Array<FeedBack> = this.$queryResults.map((query) => { return <FeedBack>{ _id: query.result.equipment._id, clicked: query.clicked, score: query.result.score } })

      const queryFeedBack: QueryFeedBackDto = { query: query, feedBacks: feedbacks }

      this.feedbackService.sendFeedBack(queryFeedBack).subscribe(({ data }) => {

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    }
  }

}
