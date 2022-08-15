import React, { useState } from 'react';

import './Suscribe.scss';

const Suscribe = () => {
    
    const [selectedButton, setSelectedButton] = useState(true);

    const suscribeToNewsLetter = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return(
        <section className="suscribe">
            <h2 className="title">Suscríbete y obtén</h2>
            <h3 className="subtitle">10% de descuento</h3>
            <p className="complement">Suscríbete a nuestro boletín quincenal y obtén 10% en tu compra</p>


            <div className="select-button">
                <button onClick={() => setSelectedButton(true)} className={selectedButton && `email-button`}>Correo electrónico</button>
                <button onClick={() => setSelectedButton(false)} className={!selectedButton && `phone-button`}>Teléfono </button>
            </div>

            {selectedButton ? 
               <form action="" className="mail-form" onSubmit={suscribeToNewsLetter}>
                    <input type="text" className="custom-search-input" placeholder="Correo electrónico"></input>
                    <button className="custom-search-botton" type="submit">Suscribir</button>
                </form>
            : <form action="" className="phone-form">
                    <input type="text" className="custom-search-input" placeholder="Ingresa tu teléfono"></input>
                    <button className="custom-search-botton" onClick={suscribeToNewsLetter}>Suscribir</button>
                </form>
            }

            
        </section>
    )
}

export default Suscribe;