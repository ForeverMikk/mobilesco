import React, { useState } from 'react';

import './Suscribe.scss';
import { sendSuscriptionData } from '../../../services/emailService';

const Suscribe = () => {


    const [suscribeData, setSuscribeData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const onChangeData = (e) => {
        const value = e.target.value;

        setSuscribeData({
            ...suscribeData,
            [e.target.name]: value
        })
        // console.log(suscribeData);
    }

    const suscribeToNewsLetter = async(e) => {
        e.preventDefault();
        
        await sendSuscriptionData(suscribeData)
    }

    return(
        <section className="suscribe">
            <h2 className="title">Suscríbete y obtén</h2>
            <h3 className="subtitle">10% de descuento</h3>
            <p className="complement">Suscríbete a nuestro boletín quincenal y obtén 10% en tu compra</p>

            <form action="" className="mail-form" onSubmit={suscribeToNewsLetter} onChange={onChangeData}>
                <input type="text" className='custom-search-input' name='name' placeholder='Nombre Completo' required/>
                <input type="email" className="custom-search-input" name='email' placeholder="Correo electrónico" required></input>
                <input type="tel" className="custom-search-input" name='phone' placeholder="Teléfono" required></input>
                <button className="custom-search-botton" type="submit">Suscribir</button>
            </form>
            
        </section>
    )
}

export default Suscribe;