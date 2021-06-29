import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CreateEquipmentDto } from 'src/app/shared/dtos/create-equipment.dto';

import { createEquipment } from '../graphql/mutations/equipment.mutation';
import { queryEquipments } from '../graphql/queries/equipment.query';
import { queryById } from '../graphql/queries/by_id.query';
import { Observable, Subject } from 'rxjs';
import { Equipment, EquipmentAndScore } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private apollo: Apollo) { }

  createEquipment(equipment: CreateEquipmentDto) {

    return this.apollo.mutate<{ createEquipment: Equipment }>({
      mutation: createEquipment,
      variables: { equipment: equipment }
    })
  }

  queryById(id: string) {

    return this.apollo.query<{ queryById: Equipment }>({
      query: queryById,
      variables: { id: id },
      fetchPolicy: 'no-cache'
    })
  }

  queryEquipments(query: string) {

    return this.apollo.query<{ queryEquipments: EquipmentAndScore[] }>({
      query: queryEquipments,
      variables: { query: query },
      fetchPolicy: 'no-cache'
    })
  }
}
