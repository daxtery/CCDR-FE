import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Equipment } from 'src/app/shared/types';
import { EquipmentService } from './equipment.service';

@Injectable({
    providedIn: 'root'
})
export class EquipmentDetailsService {

    private _selected: BehaviorSubject<Equipment | undefined>;
    selected: Observable<Equipment>;

    constructor(private equipmentService: EquipmentService) {
        this._selected = new BehaviorSubject<Equipment | undefined>(undefined);
        this.selected = this._selected.pipe(skip(1));
    }

    set(equipment: Equipment): void;
    set(id: string): void;

    async set(id_or_equipment: string | Equipment) {
        let equipment: Equipment;
        const value = this._selected.value;

        if (typeof id_or_equipment === 'string') {
            if (value && id_or_equipment == value._id) {
                equipment = value;
            } else {
                equipment = ((await this.equipmentService.queryById(id_or_equipment).toPromise()).data)["queryById"];
                this._selected.next(equipment);
            }

        } else {
            equipment = id_or_equipment;
            if (value && equipment._id != value._id) {
                this._selected.next(equipment);
            }
        }

    }

}
