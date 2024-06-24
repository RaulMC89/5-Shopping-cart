import { Navigate, Route, Routes} from "react-router-dom";
import { ProductsView } from "../components/ProductsView";
import { CartView } from "../components/CartView";
import PropTypes from 'prop-types';

export const CartRouter = ({onAddProductCart, onDeletedProductCart, productsCart}) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="ProductsView" />} />
            <Route path="ProductsView" element={< ProductsView handler={onAddProductCart} />} />
            <Route path="CartView" element={(productsCart.length == 0 ? <div className="alert alert-warning">Add product to shopping cart</div>
                : (
                    <div className="my-4 w-50">
                        <CartView products={productsCart} handler={id => onDeletedProductCart(id)} />
                    </div>
                )
            )} />
        </Routes>
    );
}


CartRouter.propTypes = {
    onAddProductCart: PropTypes.func.isRequired,
    onDeletedProductCart: PropTypes.func.isRequired,
    productsCart: PropTypes.array.isRequired,
}

