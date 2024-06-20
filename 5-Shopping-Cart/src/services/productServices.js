import { products } from "../data/products"

export const getProducts = () => {
    return products;
}

export const caculateTotal = (products) => {
    return products.reduce((acumulate, prod) => acumulate + prod.quantity * prod.product.price, 0);
}