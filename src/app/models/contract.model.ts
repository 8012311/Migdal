import { Address } from "./address.model";
import { CodeValue } from "./code-value.model";

export class Contact {
    id: number;
    deliveryFlag: boolean;
    type: CodeValue;
    firstName: string;
    lastName: string;
    identity: number;
    address: Address;
    cellPhone: number;
    email?: string;

    constructor(contact: any) {
        this.id = contact.id;
        this.deliveryFlag = contact.deliveryFlag;
        this.type = contact.type;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.identity = contact.identity;
        this.address = contact.address;
        this.cellPhone = contact.cellPhone;
        this.email = contact.email;
    }
}