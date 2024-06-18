import { useEffect, useState } from "react";

const productItemCart =[{
    product: {
        id: 3,
        name: 'Raton RGB',
        description: 'Raton con luces RGB switches cherry red',
        price: 33,
    },
    quantity: 0,
    total: 0,
}];

export const CartView = () => {
    const [productsCart, setProductsCart] =useState([]);

    useEffect(() => {
        setProductsCart(productItemCart);
    }, [])

    
    return (<>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productsCart.map(prod => (
                        <tr key={prod.product.id}>
                            <td>{prod.product.name}</td>
                            <td>{prod.product.price}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.total}</td>
                            <td>eliminar</td>
                        </tr>
                    )) }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>
    </>);
}