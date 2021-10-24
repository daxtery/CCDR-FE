import gql from 'graphql-tag';

export const queryById =
  gql`
query 
queryById($id: String!) {
  queryById(id: $id) {
      _id
      name
      group
      area
      description
      extras {
        name
        value
      }
      owner
      equipmentDetails
    }
  }
`