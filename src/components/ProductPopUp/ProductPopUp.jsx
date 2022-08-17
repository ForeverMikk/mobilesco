import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons';

import './ProductPopUp.scss';
import ImagesCarousel from './ImagesCarousel/ImagesCarousel';
import { cartActions } from '../../store/cart-slice';
import Loader from '../Loader/Loader';

const ProductPopUp = ({ name, id, category, descripcion, color, material, img, images, close }) => {

    const dispatch = useDispatch();
    const productSelected = useSelector(state => state.cart.itemList);
    const [productQuantity, setProductQuantity] = useState();

    const decrementHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    }
    
    const incrementHandler = () => {
        toast.success("Agregaste este producto a tu lista de deseos");
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

    useEffect(() => {
        const getProductQuantity = () => {
            // setProductQuantity(productSelected.cantidad);
            console.log(productSelected);
            // console.log(productQuantity);
        }

        getProductQuantity()
    }, [])
    
    return (
        <div className='product-popup'>
            <button className='close' onClick={close}>
                <FontAwesomeIcon icon={faClose} />
            </button>

            <div className="img">

                {images ? <>
                    <img src={img} alt={name} />
                    <ImagesCarousel images={images} id={id}/> 
                </> : 
                <Loader />
                }

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
                        {/* {productQuantity && productQuantity > 0 && productQuantity !== undefined ? <p>{productQuantity}</p> : <p> 0 </p>} */}
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