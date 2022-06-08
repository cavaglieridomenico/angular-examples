export class Product {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;

  constructor(
    id: string,
    title: string,
    price: string,
    img: string,
    amount: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
    this.amount = amount;
  }
}
