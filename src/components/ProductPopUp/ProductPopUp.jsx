import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './ProductPopUp.scss';
import { cartActions } from '../../store/cart-slice';

const ProductPopUp = ({ name, id, category, description, color, material, img, price }) => {

    const productList = useSelector(state => state.cart.itemList);
    const productSelected = productList.find(item => item.id === id);

    const dispatch = useDispatch();

    const decrementHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    }
    
    const incrementHandler = () => {
        console.log(productSelected)
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
        <div className='product-popup'>

            <div className="img">
                <img src={img} alt={name} />
            </div>
            
            <div className="product-info">
                <h3 className="category">Categoria {category}</h3>
                <h1>{name}</h1>
                <p className='description'>{description}</p>
                
                <div className="colors">
                    <h3 className='colors-title'>Colores: </h3>
                    <div className="buttons">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <label htmlFor="" className='label'>{color}</label>
                </div>

                <div className="sizes">
                    <h3 className='sizes-title'>Material</h3>
                    <div className="buttons">
                        <button>{material}</button>
                        {/* <button>Preescolar</button>
                        <button>Primaria</button>
                        <button>Sec / Ejecutivo</button> */}
                    </div>
                </div>

                <div className="quantity">
                    <h3 className="quantity-title">Cantidad</h3>
                    <div className="buttons">
                        <button className='less' onClick={decrementHandler}>-</button>
                        {/* <p>{productQuantity}</p> */}
                        <button className='more' onClick={incrementHandler}>+</button>
                    </div>
                </div>

                <div className="bottom-buttons">  
                    <Link to='/wishlist' className='quote'>
                        Cotizar Ahora
                    </Link>
                    <button className='heart' onClick={incrementHandler}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>

                <div className="card-footer">
                    <p>Clave: {id}</p>
                    <p>Categorias: {category}</p>
                    <p>Tags: {category}</p>
                </div>

                <div id="higslide-div-atrato-info" 
                    data-plataform="other"  
                    data-type="info" 
                    data-price="PRECIO DEL PRODUCTO" 
                    data-version="2.0" 
                    data-style="dark"  
                    data-linkcolor="black" 
                    data-urlhost="https://app.atratopago.com">
                        Atrato v2
                </div>

            </div>

        </div>
    )
}

export default ProductPopUp;