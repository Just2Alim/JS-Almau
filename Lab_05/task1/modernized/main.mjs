import * as Core from "./core.mjs";   // module object pattern
import { formatPrice } from "./utils.mjs";

const cart = new Core.Cart();
const p1 = new Core.Product(1, "Widget", 10.99);

cart.addItem(p1, 2);

console.log(`Total: ${formatPrice(cart.getTotal())}`);