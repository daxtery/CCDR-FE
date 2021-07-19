import gql from 'graphql-tag';

export const authUser =
  gql`
mutation 
  loginEmail($user: UserValidation!) {
    loginEmail(user: $user) {
      accessToken
      status
      success
      result {
        userId
      }
    }
  }
`