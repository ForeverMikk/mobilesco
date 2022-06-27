import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './ProductItem.scss'

const ProductItem = ({name, description, img, link, className}) => {

    
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
                <button className='more'>Ver Mas</button>
                <button className='heart'>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    )
}

export default ProductItem;