import gql from 'graphql-tag';

export const queryEquipments =
  gql`
query 
queryEquipments($query: String!) {
    queryEquipments(query: $query) {
      equipment {
        _id
        name
        group
        area
        description
      }
      score
    }
  }
`