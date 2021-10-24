import gql from 'graphql-tag';

export const removeEquipment =
  gql`
mutation 
removeEquipment($id: String!, $user_id: String!) {
  removeEquipment(id: $id, user_id: $user_id)
  }
`
