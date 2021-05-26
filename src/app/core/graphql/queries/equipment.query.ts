import gql from 'graphql-tag';

export const queryEquipments =
  gql`
query 
queryEquipments($query: String!) {
    queryEquipments(query: $query) {
      _id
      area
      type
    }
  }
`