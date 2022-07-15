import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';

import './ProductItem.scss'
import Loader from '../Loader/Loader';

const ProductItem = ({name, description, img, link, className}) => {
    
    const getProduct = () => {
        return(
            <>
                
            </>
        )
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
                    <div><Loader /></div>
                </Popup>
                <button className='heart'>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    )
}

export default ProductItem;