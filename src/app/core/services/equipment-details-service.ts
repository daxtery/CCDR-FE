import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Equipment } from 'src/app/shared/types';
import { EquipmentService } from './equipment.service';

@Injectable({
    providedIn: 'root'
})
export class EquipmentDetailsService {

    selected: Observable<Equipment>;

    private _selected: Subject<Equipment>;
    private _lastId?: string;

    constructor(private equipmentService: EquipmentService) {
        this._selected = new Subject();
        this.selected = this._selected.asObservable();
    }

    set(equipment: Equipment): void;
    set(id: string): void;

    async set(id_or_equipment: string | Equipment) {
        if (typeof id_or_equipment === 'string') {
            if (this._lastId != id_or_equipment) {
                const equipment = ((await this.equipmentService.queryById(id_or_equipment).toPromise()).data)["queryById"];
                this._selected.next(equipment);
            }

            this._lastId = id_or_equipment;
        } else {
            if (id_or_equipment._id != this._lastId) {
                this._selected.next(id_or_equipment);
            }

            this._lastId = id_or_equipment._id;
        }
    }

}
