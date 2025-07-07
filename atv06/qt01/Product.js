export default class Product{
    static idCounter = 0;
    constructor (name, price) {
        this.id = Product.idCounter++;
        this.name = name;
        this.price = price;
    }
}
