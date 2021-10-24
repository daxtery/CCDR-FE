import gql from 'graphql-tag';

export const queryUserById =
  gql`
query 
queryUserById($id: String!) {
    queryUserById(id: $id) {
      _id
      email
      equipments {
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
  }
`