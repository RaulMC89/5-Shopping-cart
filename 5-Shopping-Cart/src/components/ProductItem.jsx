import PropTypes from 'prop-types';

export const ProductsItem = ({name, description, price}) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price} €</p>
                    <button className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </>)
}

ProductsItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

