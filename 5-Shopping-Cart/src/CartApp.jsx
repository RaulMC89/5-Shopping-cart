import { useEffect, useState } from "react";
import { CartView } from "./components/CartView"
import { ProductsView } from "./components/ProductsView"

const productItemCart =[{
    product: {
        id: 3,
        name: 'Raton RGB',
        description: 'Raton con luces RGB switches cherry red',
        price: 33,
    },
    quantity: 2,
    total: 0,
},
{
    product: {
        id: 4,
        name: 'Teclado Mecanico',
        description: 'Teclado mecanico con luces RGB switches cherry red',
        price: 25,
    },
    quantity: 0,
    total: 0,
}];

export const CartApp = () => {
    const [productsCart, setProductsCart] =useState([]);

    useEffect(() => {
        setProductsCart(productItemCart);
    }, [])

    const onDeletedProductCart = (id) => {
        setProductsCart(productsCart.filter(prod => prod.product.id !== id));
    }
    
    const onAddProductCart = (id,name,description,price) => {
        setProductsCart([...productsCart, {product: {id,name,description,price},quantity: 2, total:3}]);
    }

    return (<>
        <div className="container">
            <h3>Cart App</h3>
            < ProductsView handler={onAddProductCart}/>
            <div className="my-4 w-50">
                <CartView products={productsCart} handler={id => onDeletedProductCart(id)}/>
            </div>
        </div>
    </>)
}