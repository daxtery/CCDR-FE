import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EquipmentAndScore, SearchResults } from 'src/app/shared/types';
import { queryEquipments } from '../graphql/queries/equipment.query';
import { lastNQueries } from '../graphql/queries/last-n-queries.query';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private searches = new Subject<SearchResults>();
    public searchesObservable = this.searches.asObservable();

    constructor(private apollo: Apollo) { }

    queryEquipments(query: string) {
        this.apollo.query<{ queryEquipments: EquipmentAndScore[] }>({
            query: queryEquipments,
            variables: { query: query },
            fetchPolicy: 'no-cache'
        }).pipe(map(result => result.data.queryEquipments))
            .subscribe({
                next: (data) => {
                    this.searches.next({ query, results: data })
                },
                error: (error: Error) => {
                    console.log('there was an error sending queryEquipments', error);
                }
            });
    }

    equipmentSugestions(query: string) {
        return this.apollo.query<{ queryEquipments: EquipmentAndScore[] }>({
            query: queryEquipments,
            variables: { query: query },
            fetchPolicy: 'no-cache'
        })
    }

    getLastNQueries(n: number) {
        return this.apollo.query<{ lastNUniqueQueries: string[] }>({
            query: lastNQueries,
            variables: { n: n },
            fetchPolicy: 'no-cache'
        })
    }

}