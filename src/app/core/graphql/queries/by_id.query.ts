import gql from 'graphql-tag';

export const queryById =
  gql`
query 
queryById($id: String!) {
  queryById(id: $id) {
      _id
      name
      area
      type
      extras
      equipmentDetails
    }
  }
`