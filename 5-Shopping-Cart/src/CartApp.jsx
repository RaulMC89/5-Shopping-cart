export const CartApp = () => {
    return (<>
        <div className="container">
            <h3>Cart App</h3>
            <div className="row">
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">25 €</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pantalla 17 pulgadas</h5>
                            <p className="card-text">Pantalla 1080P con refresco instataneo</p>
                            <p className="card-text">265 €</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Memoria Corseir 1GB</h5>
                            <p className="card-text">Memoria Ram con velocidad de escritura 4900MB y de lectura 3200Mb</p>
                            <p className="card-text">115 €</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Raton RGB</h5>
                            <p className="card-text">Raton con luces RGB switches cherry red</p>
                            <p className="card-text">33 €</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Silla gamer</h5>
                            <p className="card-text">Con reposabrazos adaptables y reposa cabezas ajustable</p>
                            <p className="card-text">367 €</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Mesa apatable 2x1,5</h5>
                            <p className="card-text">Mesa adaptable en altura para mejorar la circulacion</p>
                            <p className="card-text">279 €</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 w-50">
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
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total</td>
                            <td colSpan="2" className="text-start fw-bold">12345</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </>)
}