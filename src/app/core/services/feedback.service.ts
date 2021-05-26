import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QueryFeedBackDto } from 'src/app/shared/dtos/send-feedback.dto';

import { giveQueryFeedback } from '../graphql/mutations/feedback.mutation';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private apollo: Apollo) { }
  
  sendFeedBack(queryFeedBack: QueryFeedBackDto) {

    return this.apollo.mutate({
      mutation: giveQueryFeedback,
      variables: { queryFeedBack: queryFeedBack }
    })
  }
}
