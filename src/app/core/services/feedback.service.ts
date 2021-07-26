import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { EquipmentAndScore, SearchResults } from 'src/app/shared/types';

import { giveQueryFeedback } from '../graphql/mutations/feedback.mutation';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  lastSearch?: SearchResults;

  clickedMap = new Map<string, boolean>();

  constructor(private apollo: Apollo, readonly searchService: SearchService) {
    searchService.searchesObservable.subscribe({
      next: ({ query, results }) => {
        if (this.lastSearch && this.lastSearch.query !== query) {
          this.sendFeedBack();
        }
        this.lastSearch = { query, results };
      }
    });
  }

  equipmentWasClicked(equipment_id: string) {
    this.clickedMap.set(equipment_id, true);
  }

  sendFeedBack() {

    if (!this.lastSearch || this.clickedMap.size === 0) {
      return;
    }

    const feedbacks = this.lastSearch.results.
      map(({ equipment: { _id }, score }) => {
        const wasClicked = this.clickedMap.get(_id) || false;
        return {
          _id: _id,
          clicked: wasClicked,
          score: wasClicked ? score : 0.
        }
      })

    const queryFeedBack = { query: this.lastSearch.query, feedBacks: feedbacks }

    console.log(this.lastSearch, queryFeedBack);

    this.apollo.mutate({
      mutation: giveQueryFeedback,
      variables: { queryFeedBack: queryFeedBack }
    }).subscribe(({ data }) => {
      this.lastSearch = null;
      this.clickedMap.clear();
    }, (error) => {
      console.log('there was an error sending wasClicked', error);
    });

  }
}
