export type Area = "social" | "cultura" | "educacao" | "desporto" | "saude";

export interface Equipment {
    _id: string;
    area: Area;
    equipmentDetails: object;
    extras: object;
    name: string;
    type: string;
}

export interface EquipmentAndScore {
    equipment: Equipment;
    score: number;
};