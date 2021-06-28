export interface Equipment<T = object> {
    area: string;
    details: T;
    extras: object;
    name: string;
    type: string;
}