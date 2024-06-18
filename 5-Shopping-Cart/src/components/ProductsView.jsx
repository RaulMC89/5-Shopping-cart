import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../services/productServices";
import { ProductsItem } from "./ProductItem";

export const ProductsView = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());

    }, []);

    return (<>
            <div className="row">
                {products.map(product => (
                    <div className="col-4 my-2" key={product.id}>
                       <ProductsItem 
                       name={product.name} 
                       description={product.description} 
                       price={product.price} 
                    />
                    </div>
                ))}
            </div>
    </>);
}

