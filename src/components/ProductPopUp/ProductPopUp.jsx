import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './ProductPopUp.scss';
import ImagesCarousel from './ImagesCarousel/ImagesCarousel';
import { cartActions } from '../../store/cart-slice';

const ProductPopUp = ({ name, id, category, descripcion, color, material, img, images, cantidad }) => {

    const dispatch = useDispatch();
    
    const decrementHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    }
    
    const incrementHandler = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            // price,
            descripcion,
            img,
            category,
            color,
            images,
            material,
        }))
    }
    return (
        <div className='product-popup'>

            <div className="img">
                <img src={img} alt={name} />
                <ImagesCarousel images={images} id={id}/>
            </div>
            
            <div className="product-info">
                <h3 className="category">Categoria {category}</h3>
                <h1>{name}</h1>
                {/* <p className='description'>{descripcion}</p>
                <p>Precio: {price}</p> */}
                
                <div className="colors">
                    <h3 className='colors-title'>Colores: </h3>
                    <div className="buttons">
                        {images && images.map((item, index) => (
                            <button key={index} style={{'background': item.COLOR_CODIGO}}></button>
                        ))}
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
                        <p>{cantidad}</p>
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

            </div>
        </div>
    )
}

export default ProductPopUp;