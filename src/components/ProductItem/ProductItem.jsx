import React,{ useState } from 'react';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import './ProductItem.scss'
import ProductPopUp from '../ProductPopUp/ProductPopUp';
import { cartActions } from '../../store/cart-slice';
import { productClicked } from '../../services/productSercive';


const ProductItem = ({id, name, description, img, images, className, price, category, color, material, quantity }) => {
    
    const dispatch = useDispatch();
    const [productState, setProductState] = useState(false);
    const productList = useSelector(state => state.cart.itemList);
    
    const addToCart = () => {
        
        console.log(images)
        const currentProduct = productList.find(item => item.id === id);
        toast.success("Agregaste un producto a tu wishlist");
        if(currentProduct) {
            setProductState(!productState);
        }

        productClicked(id);
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
            description,
            img,
            images,
            category,
            color,
            material,
            quantity
        }))
    }

    return (
        <div className={`card-item ${className} ${productState ? 'active' : ''}`}>
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
                        images={images}
                        price={price}
                        color={color}
                        material={material}
                        img={img}
                        quantity={quantity}
                    />
                </Popup>
                
                <button 
                    className={`heart`} 
                    onClick={addToCart}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                
            </div>
        </div>
    )
}

export default ProductItem;