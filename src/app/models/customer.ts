import { IAddress } from "./address";

export interface ICustomer{
    userId: number;
    password: string;
    role: string;
    name: string;
    email: string;
    contactNo: string;
    dob: string;
    address: IAddress;
}