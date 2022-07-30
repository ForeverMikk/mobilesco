import React from 'react';
import { useSelector } from 'react-redux';

import './Wishlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCheck, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import PreviewProduct from './PreviewProduct/PreviewProduct';

const Wishlist = () => {

    const cartProducts = useSelector(state => state.cart.itemList);

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
                            quantity={item.quantity}
                            description={item.description} 
                            img={item.img}
                            price={item.price}
                        />
                    ))}
                </div>
                
                <aside className='summary'>
                    <div className="summary-resume">
                        <h3>Resumen del pedido</h3>
                        {cartProducts && cartProducts.map((item, index) => (
                            <p key={index}>
                               Cantidad: <span>{item.quantity}</span>
                               <br />
                               Nombre: <span>{item.name}</span>
                            </p>
                        ))}
                    </div>

                    <div className="contact-info">
                        <h3>Tipo de Entrega</h3>
                        <input type="radio" name="shipping" id="home-delivery" />
                        <label htmlFor="shipping">Envio a domicilio</label>
                        <input type="radio" name="shipping" id="pick-up" />
                        <label htmlFor="shipping">Recoger en sucursal</label>
                    </div>

                    <div className="special-info">
                            <h3>Especificaciones </h3>
                            <p>Deja un comentario con las caracteristicas deseadas para tu mobiliario; </p>
                    </div>

                    <div className="shipping-info">
                        <h3>Zona de Entrega</h3>
                        <p>
                            <FontAwesomeIcon icon={faLocationCrosshairs} /> Pachuca de Sotos, Hgo.
                        </p>
                        <button>Cambiar</button>
                    </div>

                    <div className="user-info">
                        <h3>Datos de Contacto</h3>
                        <input type="text" name="name" id="name" className="name" placeholder='Nombre'/>
                        <input type="text" name="email" id="email" className="email" placeholder='Correo electrónico'/>
                        <input type="text" name="phone" id="phone" className="phone" placeholder='Teléfono'/>
                        <button>Solicitar</button>
                    </div>
                </aside>

            </div>


             
        </section>
    )
}

export default Wishlist;