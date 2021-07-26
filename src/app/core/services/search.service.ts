import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EquipmentAndScore } from 'src/app/shared/types';
import { queryEquipments } from '../graphql/queries/equipment.query';
import { lastNQueries } from '../graphql/queries/last-n-queries.query';


export interface SearchResults {
    query: string;
    results: EquipmentAndScore[];
}

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private searches = new Subject<SearchResults>();
    public searchesObservable = this.searches.asObservable();

    constructor(private apollo: Apollo) { }

    searchEquipments(query: string) {
        this.queryEquipments(query)
            .subscribe({
                next: (data) => {
                    this.searches.next({ query, results: data })
                },
                error: (error: Error) => {
                    console.log('there was an error sending queryEquipments', error);
                }
            });
    }

    queryEquipments(query: string, limit?: number) {
        return this.apollo.query<{ queryEquipments: EquipmentAndScore[] }>({
            query: queryEquipments,
            variables: { options: { query, limit } },
            fetchPolicy: 'no-cache'
        }).pipe(map(result => result.data.queryEquipments));
    }

    getLastNUniqueQueries(n: number) {
        return this.apollo.query<{ lastNUniqueQueries: string[] }>({
            query: lastNQueries,
            variables: { n: n },
            fetchPolicy: 'no-cache'
        }).pipe(map(result => result.data.lastNUniqueQueries));
    }

}