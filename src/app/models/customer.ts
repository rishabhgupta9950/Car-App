import { IAddress } from "./address";

export class ICustomer{
    userId: number;
    password: string;
    role: string;
    name: string;
    email: string;
    contactNo: string;
    dob: string;
    address: IAddress;
}