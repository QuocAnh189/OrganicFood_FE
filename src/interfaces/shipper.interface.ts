export interface IShipper {
  _id: string;
  name: string;
  contact: string;
  deliveryTime: Date;
  address: string;
  rates: string[];
}
