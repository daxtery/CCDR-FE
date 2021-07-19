import gql from 'graphql-tag';

export const queryByIdNonPreviewDetails =
  gql`
query 
queryById($id: String!) {
  queryById(id: $id) {
      _id
      extras {
        name
        value
      }
      equipmentDetails
    }
  }
`