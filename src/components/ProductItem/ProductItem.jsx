import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';

import './ProductItem.scss'
// import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import cartSlice from '../../store/cart-slice';


const ProductItem = ({id, name, description, img, className, price, }) => {
    
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartSlice.addToCart({
            name,
            id,
            price,
            description,
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