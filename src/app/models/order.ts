import { ICar } from "./car";
import { ICustomer } from "./customer";

export interface IOrder{
    id: number;
    billingDate: string;
    status: string;
    car: ICar[];
    customer: ICustomer;
}