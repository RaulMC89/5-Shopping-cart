import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="nav nav-pills m-2">
            <NavLink className="nav-item nav-link fs-5" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link fs-5" to="/ProductsView">Catalog Products</NavLink>
            <NavLink className="nav-item nav-link fs-5" to="/CartView">Shopping cart</NavLink>
        </nav>
    );
}