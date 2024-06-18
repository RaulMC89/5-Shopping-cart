import { CartView } from "./components/CartView"
import { ProductsView } from "./components/ProductsView"

export const CartApp = () => {


    return (<>
        <div className="container">
            <h3>Cart App</h3>
            < ProductsView />
            <div className="my-4 w-50">
                <CartView />
            </div>
        </div>
    </>)
}