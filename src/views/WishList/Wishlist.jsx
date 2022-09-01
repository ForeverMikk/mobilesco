import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './Wishlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';
import PreviewProduct from './PreviewProduct/PreviewProduct';
import { sendEmailData } from '../../services/emailService';



const Wishlist = () => {

    const { t }= useTranslation();
    const cartProducts = useSelector(state => state.cart.itemList);
    const [addressInfo, setAddressInfo] = useState(
        {
            tipoEntrega: 'a domicilio',
            calle: '',
            numero: '',
            lugar: '',
            cp: ''
        }
    );
    const [userInfo, setUserInfo] = useState(
        {
            name: '',
            email: '',
            phone: ''
        }
    );

    const [extraInfo, setExtraInfo] = useState('');

    const sendSaleData = async(e, productList, addressInfo, userInfo, extraInfo) => {
        e.preventDefault();

        await sendEmailData({
            "productList": productList,
            "addressInfo": addressInfo,
            "userInfo": userInfo,
            "extraInfo": extraInfo
        })
    }

    const onChangeUser = (e) => {
        const value = e.target.value;

        setUserInfo({
            ...userInfo,
            [e.target.name]: value
        })
    }   

    const onChangeAddress = (e) => {
        const value = e.target.value;

        setAddressInfo({
            ...addressInfo,
            [e.target.name]: value
        })
        // console.log(addressInfo)
    }

    const onChangePickUp = (e) => {
        const value = e.target.value;

        setAddressInfo({
            tipoEntrega: value
        })

        // console.log(addressInfo)
    }

    const onChangeExtra = (e) => {
        const extra = e.target.value;

        setExtraInfo(extra);
    }

    useEffect(() => {
        const scrollTop = () => {
            const scrolledElement = document.getElementById('catalog');
        
            scrolledElement.scrollIntoView();
        }

        scrollTop();
    }, [])
    

    return(
        <section className="wishlist" id='catalog'>
            <h1 className="title">{t('wishlist.title')}</h1>

            <div className="status-bar">
                <p><FontAwesomeIcon icon={faHeart} /> {t('wishlist.wishlist-title')}  </p>
                <p><FontAwesomeIcon icon={faUser} /> {t('wishlist.data-title')}  </p>
                <p><FontAwesomeIcon icon={faCheck} /> {t('wishlist.confirmation-title')} </p>
            </div>

            <div className="preview">

                <div className="basket">
                    {cartProducts && cartProducts.map((item, index) => (
                        <PreviewProduct 
                            key={index}
                            id={item.id}
                            title={item.name}
                            quantity={item.cantidad}
                            descripcion={item.descripcion} 
                            img={item.img}
                            price={item.price}
                        />
                    ))}
                </div>
                
                <aside className='summary'>
                    <form id='form' onSubmit={(e) => {sendSaleData(e, cartProducts, addressInfo, userInfo, extraInfo )}}>
                        <div className="summary-resume">
                            <h3>{t('wishlist.resume.title')}</h3>
                            {cartProducts && cartProducts.map((item, index) => (
                                <p key={index}>
                                {t('wishlist.resume.quantity')} <span>{item.cantidad}</span>
                                <br />
                                {t('wishlist.resume.name')} <span>{item.name}</span>
                                {/* <br /> */}
                                {/* Precio Total: <span>{item.totalPrice}</span> */}
                                <br />
                                {t('wishlist.resume.color')} <span>{item.color}</span>
                                <br />
                                {t('wishlist.resume.material')} <span>{item.material}</span>
                                </p>
                            ))}
                        </div>

                        <div className="shipping-info" onChange={onChangePickUp} required>
                            <h3>{t('wishlist.shipping.title')}</h3>
                            <input type="radio" name="shipping" id="home-delivery" value="a domicilio"/>
                            <label htmlFor="shipping">{t('wishlist.shipping.label1')}</label>
                            <input type="radio" name="shipping" id="pick-up" value="recoger en sucursal" />
                            <label htmlFor="shipping">{t('wishlist.shipping.label2')}</label>
                        </div>

                        <div className="special-info" onChange={onChangeExtra}>
                            <h3>{t('wishlist.special-info.title')}</h3>
                            <p>{t('wishlist.special-info.description')}</p>
                            <textarea name="texarea" id="texarea" cols="30" rows="10" required></textarea>
                        </div>

                        <div className="address-info" onChange={onChangeAddress}>
                            <h3>{t('wishlist.address-info.title')}</h3>
                            <input type="text" name='calle' value={addressInfo.calle} id='calle' placeholder={t('wishlist.address-info.address')} required/>
                            <input type="text" name='lugar' value={addressInfo.lugar} id='lugar' placeholder={t('wishlist.address-info.city')} required/>

                            <div className="other">
                                <input type="number" name='numero' value={addressInfo.numero} id='numero' placeholder={t('wishlist.address-info.number')} required/>
                                <input type="number" name='cp' value={addressInfo.cp} id='cp' placeholder={t('wishlist.address-info.cp')} required/>
                            </div>

                            {/* <button>Cambiar</button> */}
                        </div>

                        <div className="user-info" onChange={onChangeUser}>
                            <h3>{t('wishlist.user-info.title')}</h3>
                            <input type="text" name="name" value={userInfo.name} id="name" className="name" placeholder={t('wishlist.user-info.name')} required/>
                            <input type="email" name="email" value={userInfo.email} id="email" className="email" placeholder={t('wishlist.user-info.email')} required/>
                            <input type="tel" name="phone" value={userInfo.phone} id="phone" className="phone" placeholder={t('wishlist.user-info.phone')} required/>
                            <button type='submit'>{t('wishlist.user-info.submit')}</button>
                        </div>
                    </form>
                </aside>

            </div>
             
        </section>
    )
}

export default Wishlist;