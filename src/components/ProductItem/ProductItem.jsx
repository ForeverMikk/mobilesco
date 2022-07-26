import React from 'react';
import Popup from 'reactjs-popup';
// import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import './ProductItem.scss'
// import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import cartSlice from '../../store/cart-slice';


const ProductItem = ({id, name, description, img, className, price }) => {
    
    let quantity = 1;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartSlice.actions.addToCart({
            name,
            id,
            price,
            description,
            img,
            quantity,
        }))
    }

    return (
        <div className={`card-item ${className}`}>
            <img src={img} alt={name} />
            <h3 className="card-title">
                {name}
            </h3>
            <p className="item-desc">
                {description}
            </p>

            <div className="card-buttons">
                <Popup 
                    modal
                    nested
                    trigger={<button className='more'>Ver Mas</button>}
                >
                    <ProductCard />
                </Popup>
                <button className='heart' onClick={addToCart}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    )
}

export default ProductItem;