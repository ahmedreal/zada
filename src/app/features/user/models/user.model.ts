import { Address } from './../../../shared/models/adresse.model';
export interface User {
    id?: number;
    firstName : string;
    lastNAme: string;
    dateOfBirth: Date;
    address: Address;
}