import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Suscribe.scss';
import { sendSuscriptionData } from '../../../services/emailService';

const Suscribe = () => {

    const { t } = useTranslation();
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
            <h2 className="title">{t('home.suscribe.title')}</h2>
            <h3 className="subtitle">{t('home.suscribe.subtitle')}</h3>
            <p className="description">{t('home.suscribe.description')}</p>

            <form action="" className="mail-form" onSubmit={suscribeToNewsLetter} onChange={onChangeData}>
                <input type="text" className='custom-search-input' name='name' placeholder={t('home.suscribe.name')} required/>
                <input type="email" className="custom-search-input" name='email' placeholder={t('home.suscribe.email')} required></input>
                <input type="tel" className="custom-search-input" name='phone' placeholder={t('home.suscribe.phone')} required></input>
                <button className="custom-search-botton" type="submit">{t('home.suscribe.submit')}</button>
            </form>
            
        </section>
    )
}

export default Suscribe;