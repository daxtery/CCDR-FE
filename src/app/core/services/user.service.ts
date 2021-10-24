import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';

import { queryUserById } from 'src/app/core/graphql/queries/user_by_id.query';
import { AuthResult } from 'src/app/shared/dtos/auth-results.dto';
import { Equipment } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;
  user$;

  constructor(private apollo: Apollo) {

     
  }

  getById(id: string) {

    return this.apollo.query({
      query: queryUserById,
      variables: { id: id },
      fetchPolicy: 'no-cache'
    })
  }
}
