import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Wishlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';
import PreviewProduct from './PreviewProduct/PreviewProduct';
import { sendEmailData } from '../../services/emailService';

const Wishlist = () => {

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

    return(
        <section className="wishlist">
            <h1 className="title">Solicitud de cotización</h1>

            <div className="status-bar">
                <p><FontAwesomeIcon icon={faHeart} /> Lista de deseos   ·  ·  ·  </p>
                <p><FontAwesomeIcon icon={faUser} /> Datos de contacto   ·  ·  ·  </p>
                <p><FontAwesomeIcon icon={faCheck} /> Confirmación   ·  ·  · </p>
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
                            <h3>Resumen del pedido</h3>
                            {cartProducts && cartProducts.map((item, index) => (
                                <p key={index}>
                                Cantidad: <span>{item.cantidad}</span>
                                <br />
                                Nombre: <span>{item.name}</span>
                                {/* <br /> */}
                                {/* Precio Total: <span>{item.totalPrice}</span> */}
                                <br />
                                Color: <span>{item.color}</span>
                                <br />
                                Material: <span>{item.material}</span>
                                </p>
                            ))}
                        </div>

                        <div className="contact-info" onChange={onChangePickUp} required>
                            <h3>Tipo de Entrega</h3>
                            <input type="radio" name="shipping" id="home-delivery" value="a domicilio"/>
                            <label htmlFor="shipping">Envio a domicilio</label>
                            <input type="radio" name="shipping" id="pick-up" value="recoger en sucursal" />
                            <label htmlFor="shipping">Recoger en sucursal</label>
                        </div>

                        <div className="special-info" onChange={onChangeExtra}>
                            <h3>Especificaciones adicionales</h3>
                            <p>Envía un comentario con las características deseadas para tu mobiliario; agrega medidas específicas, disponibilidad de colores, etc. </p>
                            <textarea name="texarea" id="texarea" cols="30" rows="10" required></textarea>
                        </div>

                        <div className="shipping-info" onChange={onChangeAddress}>
                            <h3>Zona de Entrega</h3>
                            <input type="text" name='calle' value={addressInfo.calle} id='calle' placeholder='Dirección' required/>
                            <input type="text" name='lugar' value={addressInfo.lugar} id='lugar' placeholder='Ciudad o Localidad' required/>

                            <div className="other">
                                <input type="number" name='numero' value={addressInfo.numero} id='numero' placeholder='Número Exterior' required/>
                                <input type="number" name='cp' value={addressInfo.cp} id='cp' placeholder='Código Postal' required/>
                            </div>

                            {/* <button>Cambiar</button> */}
                        </div>

                        <div className="user-info" onChange={onChangeUser}>
                            <h3>Datos de Contacto</h3>
                            <input type="text" name="name" value={userInfo.name} id="name" className="name" placeholder='Nombre' required/>
                            <input type="email" name="email" value={userInfo.email} id="email" className="email" placeholder='Correo electrónico' required/>
                            <input type="tel" name="phone" value={userInfo.phone} id="phone" className="phone" placeholder='Teléfono' required/>
                            <button type='submit'>Solicitar</button>
                        </div>
                    </form>
                </aside>

            </div>
             
        </section>
    )
}

export default Wishlist;