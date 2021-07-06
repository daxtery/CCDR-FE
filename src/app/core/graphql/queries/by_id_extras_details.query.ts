import gql from 'graphql-tag';

export const queryByIdExtraDetails =
  gql`
query 
queryById($id: String!) {
  queryById(id: $id) {
      _id
      extras
      equipmentDetails
    }
  }
`