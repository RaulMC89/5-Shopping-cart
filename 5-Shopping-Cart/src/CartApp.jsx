import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView"
import { ProductsView } from "./components/ProductsView"
import { UseProductCart } from "./hooks/useProductCart"



export const CartApp = () => {
    const { productsCart, onAddProductCart, onDeletedProductCart

    } = UseProductCart();

    return (<>
        <nav className="nav nav-pills m-2">
            <a className="nav-item nav-link fs-5" href="ProductsView">Cart App</a>
            <a className="nav-item nav-link active fs-5" href="ProductsView">Catalog Products</a>
            <a className="nav-item nav-link fs-5" href="CartView">Shopping cart</a>
        </nav>
        <div className="container">
            <Routes>
                <Route path="/" element={<Navigate to="ProductsView" />} />
                <Route path="ProductsView" element={< ProductsView handler={onAddProductCart} />} />
                <Route path="CartView" element={(productsCart?.length == 0 ? <div className="alert alert-warning">Add product to shopping cart</div>
                    : (
                        <div className="my-4 w-50">
                            <CartView products={productsCart} handler={id => onDeletedProductCart(id)} />
                        </div>
                    )
                )} />
            </Routes>


        </div>
    </>)
}