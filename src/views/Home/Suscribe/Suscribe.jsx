import React from 'react';

import './Suscribe.scss';


const Suscribe = () => {
    return(
        <section className="suscribe">
            <h2 className="title">Suscríbete y obtén</h2>
            <h3 className="subtitle">10% de descuento</h3>
            <p className="complement">Obtén tu descuento para productos seleccionados</p>

            <form action="" className="mail-form">
                <input type="text" class="custom-search-input" placeholder="Correo electrónico"></input>
                <button class="custom-search-botton" type="submit">Subscribe</button>
            </form>
        </section>
    )
}

export default Suscribe;