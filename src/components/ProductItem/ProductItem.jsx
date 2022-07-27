
import React from 'react';
import Popup from 'reactjs-popup';
// import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import './ProductItem.scss'
import { cartActions } from '../../store/cart-slice';
import ProductPopUp from '../ProductPopUp/ProductPopUp';


const ProductItem = ({id, name, description, img, className, price, category, color, material }) => {
    
    const dispatch = useDispatch();
    // const productList = useSelector(state => state.cart.itemList);

    // const productSelected = productList.find(item => item.id === id);

    const addToCart = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
            description,
            img,
            category,
            color,
            material
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
                    trigger={<button className='more'>Ver más</button>}
                >
                    <ProductPopUp 
                        id={id} 
                        name={name} 
                        description={description} 
                        category={category} 
                        price={price}
                        color={color}
                        material={material}
                        img={img}
                    />
                </Popup>
                
                <button className={`heart`} onClick={addToCart}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                
                
            </div>
        </div>
    )
}

export default ProductItem;