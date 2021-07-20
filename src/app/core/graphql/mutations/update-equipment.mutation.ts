import gql from 'graphql-tag';

export const updateEquipment =
  gql`
mutation 
updateEquipment($id: String, $equipment: CreateEquipmentDto!) {
    updateEquipment(id: $id, equipment: $equipment) {
      name
      area
      group
      description
      equipmentDetails
      extras {
        name
        value
      }
    }
  }
`
