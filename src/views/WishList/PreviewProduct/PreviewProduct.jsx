import React from 'react';
import { useDispatch } from 'react-redux';
import './PreviewProduct.scss';
import { cartActions } from '../../../store/cart-slice';

const PreviewProduct = ({ img, name, description, id, price, quantity }) => {

    const dispatch = useDispatch();

    const decrementHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    }

    const incrementHandler = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
            description,
            img,
        }))
    }
    return (
        <div className='preview-product'>
            <div className="img">
                <img src={img} alt={`${name} preview`} />
            </div>

            <div className="preview-info">
                <h3 className="title">{name}</h3>
                <p className="description">{description}</p>
                <button className='more'>Ver más</button>
                <p>{quantity}</p>
                <button className='add' onClick={incrementHandler}>+</button>
                <button className="remove" onClick={decrementHandler}>Eliminar</button>
            </div>
        </div>
    )
}


export default PreviewProduct;