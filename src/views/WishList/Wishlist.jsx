import React from 'react';

import './Wishlist.scss';
import previewImg from '../../asstes/img/sillas/silla-1.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faHeart, faCheck} from '@fortawesome/free-solid-svg-icons';
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

                </div>
                
                <aside className='summary'>
                    
                </aside>

            </div>


             
        </section>
    )
}

export default Wishlist;