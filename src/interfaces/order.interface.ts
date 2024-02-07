export interface IOrder {
  _id: string;
  user: string;
  address: string;
  orderItems: string[];
  totalValue: number;
  status: string;
  payment: string;
  paid: boolean;
  ship: string;
}
