import gql from 'graphql-tag';

export const queryEquipments =
  gql`
query 
queryEquipments($options: QueryOptions!) {
    queryEquipments(options: $options) {
      equipment {
        _id
        name
        group
        area
        description
        owner
      }
      score
    }
  }
`