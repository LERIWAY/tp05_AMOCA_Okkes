export class Product {
    name!: string;
    description!: string;
    price: number = 0;
    id!: string;
    quantity!: number;
    constructor(name: string, description: string, price: number, id: string, quantity:number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.id=id;
        this.quantity=quantity;
    }
}