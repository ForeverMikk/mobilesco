import React,{ useState } from 'react';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import './ProductItem.scss'
import ProductPopUp from '../ProductPopUp/ProductPopUp';
import { cartActions } from '../../store/cart-slice';
import { productFavorite } from '../../services/productSercive';


const ProductItem = ({id, name, descripcion, img, images, className, category, color, material, type }) => {
    
    const dispatch = useDispatch();
    const productList = useSelector(state => state.cart.itemList);
    const [isFavorite, setIsFavorite] = useState(false);
    
    const addToCart = () => {
        const currentProduct = productList.find(item => item.id === id);
        console.log(currentProduct);
       
        if(currentProduct) {
            console.log("remove");
            setIsFavorite(false);
            // toast.error("Quitaste un producto a tu lista de deseos");
            dispatch(cartActions.deleteFromCart(id));
        } else {
            toast.success("Agregaste un producto a tu lista de deseos");
            console.log("add");
            setIsFavorite(true);
            productFavorite(id);
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

    }
    

    return (
        <div className={`card-item ${className} ${isFavorite ? 'active' : ''}`}>
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
                            setIsFavorite={setIsFavorite}
                            isFavorite={isFavorite}
                            type={type}
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