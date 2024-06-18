import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../services/productServices";

export const ProductsView = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());

    }, []);

    return (<>
            <div className="row">
                {products.map(product => (
                    <div className="col-4 my-2" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price} €</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </>);
}