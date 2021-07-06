import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { Equipment, EquipmentPreview } from 'src/app/shared/types';
import { EquipmentService } from './equipment.service';

@Injectable({
    providedIn: 'root'
})
export class EquipmentDetailsService {

    equipment?: Equipment;

    equipment$?: Observable<Equipment>;

    constructor(private equipmentService: EquipmentService) { }

    set_equipment(equipment: EquipmentPreview) {
        this.equipment$ = this.equipmentService.queryByIdExtraDetails(equipment._id)
            .pipe(
                map(response =>
                    this.equipment = { ...equipment, ...response.data.queryById }
                ));
    }

    get_or_fetch_and_set(id: string) {
        if (this.equipment && this.equipment._id == id) {
            return of(this.equipment);
        }

        if (this.equipment$) {
            return this.equipment$;
        }

        return this.equipmentService.queryById(id).pipe(map(response => response.data.queryById));
    }


}
