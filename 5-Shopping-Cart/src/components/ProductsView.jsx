import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { getProducts } from "../services/productServices";
import { ProductsItem } from "./ProductItem";

export const ProductsView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());

    }, []);

    return (<>
            <div className="row">
                {products.map(product => (
                    <div className="col-4 my-2" key={product.id}>
                       <ProductsItem 
                       id={product.id}
                       name={product.name} 
                       description={product.description} 
                       price={product.price} 
                       handler={handler}
                    />
                    </div>
                ))}
            </div>
    </>);
}

ProductsView.propTypes = {
    handler: PropTypes.func.isRequired,
}