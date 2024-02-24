export interface ISize {
  name: string;
  value: number;
}

export interface IProduct {
  _id?: string;
  name: string;
  color: string;
  promotion: string;
  description: string;
  price: number;
  image: string;
  category: string;
  origin: string;
  sizes: ISize[];
  stockQuantity: number;
  rates: string[];
  purchases: number;
  store: string;
}
