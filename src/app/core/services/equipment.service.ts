import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CreateEquipmentDto } from 'src/app/shared/dtos/create-equipment.dto';

import { createEquipment } from '../graphql/mutations/equipment.mutation';
import { queryEquipments } from '../graphql/queries/equipment.query';
import { queryById } from '../graphql/queries/by_id.query';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private apollo: Apollo) { }

  createEquipment(equipment: CreateEquipmentDto) {

    return this.apollo.mutate({
      mutation: createEquipment,
      variables: { equipment: equipment }
    })
  }

  queryById(id: string) {

    return this.apollo.query({
      query: queryById,
      variables: { id: id },
      fetchPolicy: 'no-cache'
    })
  }

  queryEquipments(query: string) {

    return this.apollo.query({
      query: queryEquipments,
      variables: { query: query },
      fetchPolicy: 'no-cache'
    })
  }
}
