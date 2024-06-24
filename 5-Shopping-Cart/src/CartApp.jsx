import { NavBar } from "./components/NavBar";
import { UseProductCart } from "./hooks/useProductCart"
import { CartRouter } from "./router/CartRouter";



export const CartApp = () => {
    const { productsCart, onAddProductCart, onDeletedProductCart } = UseProductCart();

    return (<>
        <NavBar />
        <div className="container">
            < CartRouter onAddProductCart={onAddProductCart} onDeletedProductCart={onDeletedProductCart} productsCart={productsCart} />
        </div>
    </>)
}