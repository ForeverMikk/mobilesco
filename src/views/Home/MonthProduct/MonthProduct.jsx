import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './MonthProduct.scss';
import { cartActions } from '../../../store/cart-slice';
import { productFavorite } from '../../../services/productSercive';

const MonthProduct = ({ name, descripcion, img, id, category, color, material }) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isFavorite, setIsFavorite] = useState(false);

    const addToCart = () => {
        toast.success("Agregaste un producto a tu lista de deseos");
        // console.log("add");
        setIsFavorite(!isFavorite);
        productFavorite(id);
        dispatch(cartActions.addToCart({
            name,
            id,
            // price,
            descripcion,
            img,
           
            category,
            color,
            material,
        }))
    }

    return(
        <section className='month-product'>

            <div className="data">
                <h3 className="subtitle">{t('home.moth-product.subtitle')}</h3>
                <h2 className="title">{name}</h2>
                
                <p className="description">
                    {descripcion}
                </p>

                <div className='buttons'>
                    <Link to='/wishlist' className='buy'>{t('home.moth-product.quote')}</Link>
                    <button className={isFavorite ? 'cart' : 'cart active'} onClick={addToCart}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>

            <div className="img">
                <img src={img} alt={name} />
            </div>

        </section>
    )
}

export default MonthProduct;