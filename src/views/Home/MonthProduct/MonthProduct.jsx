import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './MonthProduct.scss';
import desk from '../../../asstes/img/desk.jpg';

const MonthProduct = () => {
    return(
        <section className='month-product'>

            <div className="data">
                <h3 className="subtitle">Muebles del Mes</h3>
                <h2 className="title">Cubiculos fontana</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas, libero dolore ipsam iure optio reprehenderit itaque delectus incidunt, aliquam sapiente? Facilis voluptates rem est placeat. Atque placeat sequi provident.
                </p>
                <div className='buttons'>
                    <button className='buy'>Comprar</button>
                    <button className='cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div>

            <div className="img">
                <img src={desk} alt="" />
            </div>

        </section>
    )
}

export default MonthProduct;