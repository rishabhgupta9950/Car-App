import { ICustomer } from "./customer";
import { Payment } from "./payment";

export class IAppointment{
    id: number;
    location: string;
    inspectionType: string;
    preferredDate: string;
    preferredTime: string;
    customer: ICustomer;
    payment: Payment;

    

   
}
