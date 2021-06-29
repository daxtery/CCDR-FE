export interface Equipment<T = object> {
    _id: string;
    area: string;
    details: T;
    extras: object;
    name: string;
    type: string;
}

export interface EquipmentAndScore {
    equipment: Equipment;
    score: number;
};