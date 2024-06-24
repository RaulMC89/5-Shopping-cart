import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductsItem = ({id, name, description, price, handler}) => {
    const navigate = useNavigate();
    
    const onAddProductCart = (product) => {
        handler(product);
        navigate('/CartView');
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price} €</p>
                    <button className="btn btn-primary" onClick={() => onAddProductCart({id,name,description,price})}>Agregar</button>
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

