import { Resource } from './resource.model';
export interface Address {
    address1: string;
    address2: string;
    city: Resource;
    zipCode: number;
    country: Resource;
}