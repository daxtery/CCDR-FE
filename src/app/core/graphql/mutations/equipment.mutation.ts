import gql from 'graphql-tag';

export const createEquipment =
  gql`
mutation 
createEquipment($equipment: CreateEquipmentDto!) {
    createEquipment(equipment: $equipment) {
      name
      area
      group
      type
      equipmentDetails
      extras {
        name
        value
      }
    }
  }
`
