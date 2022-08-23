import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './MonthProduct.scss';

const MonthProduct = ({ name, descripcion, img }) => {
    return(
        <section className='month-product'>

            <div className="data">
                <h3 className="subtitle">Lo más destacado</h3>
                <h2 className="title">{name}</h2>
                
                <p className="description">
                    {descripcion}
                </p>

                <div className='buttons'>
                    <button className='buy'>Cotizar</button>
                    <button className='cart'>
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