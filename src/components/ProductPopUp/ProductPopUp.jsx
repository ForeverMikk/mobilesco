import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './ProductPopUp.scss';
import ImagesCarousel from './ImagesCarousel/ImagesCarousel';
import { cartActions } from '../../store/cart-slice';
// import Loader from '../Loader/Loader';
import { productClicked } from '../../services/productSercive';

const ProductPopUp = ({ name, id, category, descripcion, color, material, type, img, images, close, isFavorite, setIsFavorite }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(img);
    
    const addFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    const incrementHandler = () => {
        toast.success("Agregaste este producto a tu lista de deseos");
        addFavorite();
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
        productClicked(id);
    }, [id])
    
    return (
        <div className='product-popup'>
            <button className='close' onClick={close}>
                <FontAwesomeIcon icon={faClose} />
            </button>

            <div className="img">

               {images && <>
                    <img src={mainImage} alt={name} />
                    <ImagesCarousel images={images} id={id} setMainImage={setMainImage}/> 
                </>}

            </div>
            
            <div className="product-info">
                <h3 className="category">{t('popup.category')}{category}</h3>
                <h1>{name}</h1>
                <h3>{t('popup.description')}</h3>
                <p className='description'> {descripcion}</p>
                {/* <p>Precio: {price}</p>  */}
                
                <div className="colors">
                    <h3 className='colors-title'>{t('popup.color')}</h3>
                    <div className="buttons">
                        {images && images.map((item, index) => (
                            <button 
                                key={index} 
                                style={{'background': item.COLOR_CODIGO}} 
                                onClick={() => setMainImage(`https://mobilesco.mx/API/images/uploads/${id}/${item.NOMBRE}`)}
                            ></button>
                        ))}
                    </div>
                    <label htmlFor="" className='label'>{color}</label>
                </div>

                <div className="sizes">
                    <h3 className='sizes-title'>{t('popup.material')}</h3>
                    <div className="buttons">
                        <button>{material}</button>
                        {/* <button>Preescolar</button>
                        <button>Primaria</button>
                        <button>Sec / Ejecutivo</button> */}
                    </div>
                </div>

                <div className="bottom-buttons">  
                    <Link to='/wishlist' className='quote'>
                        {t('popup.quote')}
                    </Link>
                    <button className={`heart ${isFavorite ? 'active' : ''}`} onClick={incrementHandler}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>

                <div className="card-footer">
                    <p>{t('popup.id')} {id}</p>
                    <p>{t('popup.category')} {category}</p>
                    <p>{t('popup.type')} {type}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductPopUp;