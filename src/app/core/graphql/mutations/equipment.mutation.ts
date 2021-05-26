import gql from 'graphql-tag';

export const createEquipment =
  gql`
mutation 
createEquipment($equipment: CreateEquipmentDto!) {
    createEquipment(equipment: $equipment) {
      area
      type
      extras {
        name
      }
    }
  }
`