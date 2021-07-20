import gql from 'graphql-tag';

export const removeEquipment =
  gql`
mutation 
removeEquipment($id: String!) {
  removeEquipment(id: $id)
  }
`
