import { config } from "./config.mjs";

export class Product {
    #id;
    #name
    #price;

    constructor(id, name, price) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }
}

export class Cart {
    #items = [];

    addItem(product, quantity) {
        this.#items.push({ product, quantity });
    }

    getSubtotal() {
        let total = 0;
        for (const { product, quantity } of this.#items) {
            total += product.price * quantity;
        }
        return total;
    }

    getTax() {
        return this.getSubtotal() * config.taxRate;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }
}   