import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { FeedBack, QueryFeedBackDto } from 'src/app/shared/dtos/send-feedback.dto';

import { EquipmentService } from '../../../../core/services/equipment.service';

@Component({
  selector: 'app-search-equipment',
  templateUrl: './search-equipment.component.html',
  styleUrls: ['./search-equipment.component.sass']
})
export class SearchEquipmentComponent implements OnInit {

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

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

      this.previousSearch = this.searchValue
      this.searchValue = ''
    }

  }

  markAsClicked(id) {

    let clickedItem = this.$queryResults.find((query) => { return query.result._id == id });

    clickedItem.clicked = true;
  }

  sendQueriesFeedback() {

    if (this.$queryResults.length != 0) {

      const query = this.previousSearch;

      const feedbacks: Array<FeedBack> = this.$queryResults.map((query) => { return <FeedBack>{ _id: query.result._id, clicked: query.clicked } })

      const queryFeedBack: QueryFeedBackDto = { query: query, feedBacks: feedbacks }

      this.feedbackService.sendFeedBack(queryFeedBack).subscribe(({ data }) => {

      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    }
  }

}
