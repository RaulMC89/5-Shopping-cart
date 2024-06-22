import { useEffect, useReducer} from "react";
import { CartView } from "./components/CartView"
import { ProductsView } from "./components/ProductsView"
import { productsReducer } from "./reducer/productsReducer";

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
                type: 'UpdateDownQuantityProductCart',
                payload: id,
            })
        } else {
            dispatch({
                type: 'DeletedProductCart',
                payload: id,
            })
        }
    }

    const onAddProductCart = (product) => {
        const hastProduct = productsCart.find(prod => prod.product.id === product.id);
        if (hastProduct) {
            dispatch({
                type: 'UpdateUpQuantityProductCart',
                payload: product,
            })
        } else {
            dispatch({
                type: 'AddProductCart',
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