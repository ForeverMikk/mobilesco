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


const ProductItem = ({id, name, descripcion, img, images, className, category, color, material }) => {
    
    const dispatch = useDispatch();
    const productList = useSelector(state => state.cart.itemList);
    const [productState, setProductState] = useState(false);
    const [isFavorite, setIsFavorite] = useState();
    
    const addToCart = () => {
        // console.log(images)
        const currentProduct = productList.find(item => item.id === id);
        toast.success("Agregaste un producto a tu lista de deseos");
        if(currentProduct) {
            setProductState(!productState);
        }

        productClicked(id);
        dispatch(cartActions.addToCart({
            name,
            id,
            // price,
            descripcion,
            img,
            images,
            category,
            color,
            material,
        }))
    }
    

    return (
        <div className={`card-item ${className} ${productState ? 'active' : ''}`}>
            <img src={img} alt={name} />
            <h3 className="card-title">
                {name}
            </h3>
            <p className="item-desc">
                {descripcion}
            </p>

            <div className="card-buttons">
                <Popup 
                    modal
                    nested
                    trigger={<button className='more'>Ver más</button>}
                >
                    {close => (
                        <ProductPopUp 
                            id={id} 
                            name={name} 
                            descripcion={descripcion} 
                            category={category} 
                            images={images}
                            // price={price}
                            color={color}
                            material={material}
                            img={img}
                            close={close}
                        />
                    )}
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