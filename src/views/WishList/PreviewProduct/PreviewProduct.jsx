import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './PreviewProduct.scss';
import { cartActions } from '../../../store/cart-slice';

const PreviewProduct = ({ img, name, descripcion, id, price, quantity }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(cartActions.deleteFromCart(id))
    }

    const decrementHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    }

    const incrementHandler = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
            descripcion,
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
                <p className="description">{descripcion}</p>
                <div className="buttons">
                    <button className='add' onClick={incrementHandler}>+</button>
                    <span>{quantity}</span>
                    <button className='add' onClick={decrementHandler}>-</button>
                    <button className="remove" onClick={deleteHandler}>{t('wishlist.product-info.delete')}</button>
                </div>
                <button className='more'>{t('wishlist.product-info.more')}</button>
            </div>
        </div>
    )
}


export default PreviewProduct;