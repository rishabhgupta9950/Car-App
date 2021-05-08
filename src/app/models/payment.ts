import { ICard} from './card'
export class IPayment{
    card: ICard;
    id: number;
    status: string;
    type: string
}