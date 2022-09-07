import React, {useEffect} from 'react'
import { Widget } from '@typeform/embed-react';
import { useTranslation } from 'react-i18next';

import './Contact.scss';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';




const Contact = () => {

    const {t} = useTranslation();

    useEffect(() => {
        const scrollTop = () => {
            const scrolledElement = document.getElementById('contact');
        
            scrolledElement.scrollIntoView();
        }
        
        scrollTop();
    }, [])
    

    return (
        <section className="contact" id="contact">
            <GoogleCalendar />

            <div className="info">
                <h1>{t('about-us.join-us.title')}</h1>
                <p>{t('about-us.join-us.description')}</p>
            </div>

            <Widget 
                id='pot9swBe' 
                className='my-form' 
                source='//embed.typeform.com/next/embed.js' 
                style={{height: '100vh'}}  
                data-tf-inline-on-mobile
            />
        </section>
        )
}

export default Contact;