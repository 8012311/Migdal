import { Address } from "./address.model";

export class Insured {
    companyEmployer: boolean;
    position: string;
    identity: number;
    firstName: string;
    lastName: string
    age: number;
    lastJobDescription: string;
    smokingCode: number;
    email: string;
    address: Address;
    cellPhone?: string;
}
