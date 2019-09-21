export class Purchase {
    date: string;
    products: string;
    price: number;

    constructor(
        date: string,
        products: string,
        price: number
    ) {
        this.date = date;
        this.products = products;
        this.price = price;
    }
}