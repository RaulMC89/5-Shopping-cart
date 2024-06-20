import { useState } from "react";
import { CartView } from "./components/CartView"
import { ProductsView } from "./components/ProductsView"


export const CartApp = () => {
    const [productsCart, setProductsCart] = useState([]);

    /*useEffect(() => {
        setProductsCart(productItemCart);
    }, [])*/

    const onDeletedProductCart = (id) => {
        const hastProduct = productsCart.find(prod => prod.product.id === id);
        if (hastProduct && hastProduct.quantity > 1) {
            // setProductsCart([
            //     ...productsCart.filter(prod => prod.product.id !== id),
            //     {
            //         product: hastProduct.product,
            //         quantity: hastProduct.quantity - 1,
            //         total: (hastProduct.quantity - 1) * hastProduct.product.price,
            //     }
            // ]);

            setProductsCart(
                productsCart.map(prod => {
                    if (prod.product.id === id) {
                        prod.quantity -= 1;
                    }
                    return prod;
                })
            )
        } else {
            setProductsCart([
                ...productsCart.filter(prod => prod.product.id !== id)
            ]);
        }
    }

    const onAddProductCart = (product) => {
        const hastProduct = productsCart.find(prod => prod.product.id === product.id);
        if (hastProduct) {
            // setProductsCart([
            //     ...productsCart.filter(prod => prod.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hastProduct.quantity + 1,
            //     }
            // ]);
            setProductsCart(
                productsCart.map(prod => {
                    if (prod.product.id === product.id) {
                        prod.quantity += 1;
                    }
                    return prod;
                })
            )
        } else {
            setProductsCart([
                ...productsCart,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    }

    return (<>
        <div className="container">
            <h3>Cart App</h3>
            < ProductsView handler={onAddProductCart} />
            <div className="my-4 w-50">
                <CartView products={productsCart} handler={id => onDeletedProductCart(id)} />
            </div>
        </div>
    </>)
}