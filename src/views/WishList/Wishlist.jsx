import React from 'react';

import './Wishlist.scss';
import previewImg from '../../asstes/img/sillas/silla-1.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faHeart, faCheck, faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons';
import PreviewProduct from './PreviewProduct/PreviewProduct';


const Wishlist = () => {
    return(
        <section className="wishlist">
            <h1 className="title">Solicitud de cotización</h1>

            <di className="status-bar">
                <p><FontAwesomeIcon icon={faHeart} /> Lista de deseos   ·  ·  ·  </p>
                <p><FontAwesomeIcon icon={faUser} /> Datos de contacto   ·  ·  ·  </p>
                <p><FontAwesomeIcon icon={faCheck} /> Confirmación   ·  ·  · </p>
            </di>

            <div className="preview">

                <div className="basket">
                    <PreviewProduct 
                        title="Silla ISO" 
                        description="Silla acojinada en vinil o pliana con estructura tubular ovalada y coderas. Variedad de colores. Pregunte por los disponibles." 
                        img={previewImg}
                    />
                    <PreviewProduct 
                        title="Silla ISO" 
                        description="Silla acojinada en vinil o pliana con estructura tubular ovalada y coderas. Variedad de colores. Pregunte por los disponibles." 
                        img={previewImg}
                    />
                    <PreviewProduct 
                        title="Silla ISO" 
                        description="Silla acojinada en vinil o pliana con estructura tubular ovalada y coderas. Variedad de colores. Pregunte por los disponibles." 
                        img={previewImg}
                    />

                </div>
                
                <aside className='summary'>
                    <div className="summary-resume">
                        <h3>Resumen del pedido</h3>
                        <p><span>2</span>Silla Chida</p>
                        <p><span>3</span>Silla Chida</p>
                        <p><span>5</span>Silla Chida</p>
                    </div>

                    <div className="contact-info">
                        <h3>Tipo de Entrega</h3>
                        <input type="radio" name="home-delivery" id="home-delivery" />
                        <label htmlFor="home-delivery">Envio a domicilio</label>
                        <input type="radio" name="pick-up" id="pick-up" />
                        <label htmlFor="pick-up">Recoger en sucursal</label>
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