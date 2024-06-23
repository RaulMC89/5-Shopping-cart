import { useEffect, useReducer} from "react";
import { CartView } from "./components/CartView"
import { ProductsView } from "./components/ProductsView"
import { productsReducer } from "./reducer/productsReducer";
import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_DOWN_QUANTITY_PRODUCT_CART, UPDATE_UP_QUANTITY_PRODUCT_CART } from "./reducer/useProductsCart";

const data = JSON.parse(localStorage.getItem("productCart")) || [];

export const CartApp = () => {
    const [productsCart , dispatch] = useReducer(productsReducer, data);

    useEffect(() => {
        localStorage.setItem("productCart", JSON.stringify(productsCart));
    }, [productsCart])

    const onDeletedProductCart = (id) => {
        const hastProduct = productsCart.find(prod => prod.product.id === id);
        if (hastProduct && hastProduct.quantity > 1) {

            dispatch({
                type: UPDATE_DOWN_QUANTITY_PRODUCT_CART,
                payload: id,
            })
        } else {
            dispatch({
                type: DELETE_PRODUCT_CART,
                payload: id,
            })
        }
    }

    const onAddProductCart = (product) => {
        const hastProduct = productsCart.find(prod => prod.product.id === product.id);
        if (hastProduct) {
            dispatch({
                type: UPDATE_UP_QUANTITY_PRODUCT_CART,
                payload: product,
            })
        } else {
            dispatch({
                type: ADD_PRODUCT_CART,
                payload: product,
            });
        }
    }

    return (<>
        <div className="container">
            <h3>Cart App</h3>
            < ProductsView handler={onAddProductCart} />
            {productsCart?.length == 0 ||
                (
                    <div className="my-4 w-50">
                        <CartView products={productsCart} handler={id => onDeletedProductCart(id)} />
                    </div>
                )
            }
        </div>
    </>)
}