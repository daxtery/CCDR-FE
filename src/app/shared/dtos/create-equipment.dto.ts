import { Extra } from "../types";

export class CreateEquipmentDto {

    name: String;
    group: String;
    area: String;
    description: String;

    extras: Extra[];
    equipmentDetails: Object;
}