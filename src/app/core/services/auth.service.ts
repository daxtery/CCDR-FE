import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { UserValidation } from '../../shared/dtos/user-validation.dto';
import { AuthResult } from '../../shared/dtos/auth-results.dto';

import { authUser } from '../graphql/mutations/login.mutation';
import { tap } from 'rxjs/operators';

import * as moment from 'moment';
// @ts-ignore  
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  authUser(userData: UserValidation) {

    return this.apollo.mutate({
      mutation: authUser,
      variables: {
        user: userData
      }
    }).pipe(tap(res => this.set_session(res.data["loginEmail"])));
  }

  private set_session(authResult: AuthResult) {

    if (authResult.success) {

      const expires_in = jwt_decode(authResult.accessToken)['exp'];
      const expires_at = moment.unix(expires_in);

      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('expires_at', JSON.stringify(expires_at.valueOf()));
    }

  }

  logout() {

    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  public is_logged_in(): boolean {

    return moment().isBefore(this.get_expiration());
  }

  public is_logged_out(): boolean {

    return !this.is_logged_in();
  }

  get_expiration() {

    const expires_at = localStorage.getItem('expires_at');

    return moment(JSON.parse(expires_at));
  }
}
