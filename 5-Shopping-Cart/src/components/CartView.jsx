import PropTypes from 'prop-types';

export const CartView = ({products , handler}) => {


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
                    {products.map(prod => (
                        <tr key={prod.product.id}>
                            <td>{prod.product.name}</td>
                            <td>{prod.product.price}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.total}</td>
                            <td><button className='btn btn-danger' onClick={() => handler(prod.product.id)}>Eliminar</button></td>
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

CartView.propTypes = {
    products: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
}