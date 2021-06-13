export class Extras {

    name: String;
}

export class CreateEquipmentDto {

    area: String;
    type: String;
    extras: Extras;
    equipmentDetails: Object;
}