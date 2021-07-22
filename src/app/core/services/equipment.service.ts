import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CreateEquipmentDto } from 'src/app/shared/dtos/create-equipment.dto';

import { createEquipment } from '../graphql/mutations/create-equipment.mutation';
import { updateEquipment } from '../graphql/mutations/update-equipment.mutation';
import { removeEquipment } from '../graphql/mutations/remove-equipment.mutation';

import { queryEquipments } from '../graphql/queries/equipment.query';
import { lastNQueries } from '../graphql/queries/last-n-queries.query';
import { queryById } from '../graphql/queries/by_id.query';
import { queryByIdNonPreviewDetails } from '../graphql/queries/by_id_non_preview_details.query';
import { Equipment, EquipmentAndScore, EquipmentNonPreviewDetails } from 'src/app/shared/types';

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

  updateEquipment(id: string, equipment: CreateEquipmentDto) {

    return this.apollo.mutate<{ updateEquipment: Equipment }>({
      mutation: updateEquipment,
      variables: { id: id, equipment: equipment }
    });

  }

  removeEquipment(id: string) {

    return this.apollo.mutate<{ removeEquipment: boolean }>({
      mutation: removeEquipment,
      variables: { id: id }
    });

  }

  getByIdNonPreviewDetails(id: string) {

    return this.apollo.query<{ queryById: EquipmentNonPreviewDetails }>({
      query: queryByIdNonPreviewDetails,
      variables: { id: id },
      fetchPolicy: 'no-cache'
    })
  }

  getById(id: string) {

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

  getLastNQueries(n: number) {

    return this.apollo.query<{ lastNUniqueQueries: string[] }>({
      query: lastNQueries,
      variables: { n: n },
      fetchPolicy: 'no-cache'
    })
  }
}
