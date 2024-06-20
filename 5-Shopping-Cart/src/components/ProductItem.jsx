import PropTypes from 'prop-types';

export const ProductsItem = ({id, name, description, price, handler}) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price} €</p>
                    <button className="btn btn-primary" onClick={() => handler({id,name,description,price})}>Agregar</button>
                </div>
            </div>
        </>)
}

ProductsItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handler: PropTypes.func.isRequired,
}

