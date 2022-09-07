import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import './AboutUs.scss';
import serviceImg from '../../asstes/img/services.jpg';
import handShake from '../../asstes/img/hand-shake.png';
import shoopingCart from '../../asstes/img/shopping-cart.png';
import supportAgent from '../../asstes/img/support-agent.png';
import truck from '../../asstes/img/truck.png';

import aboutBackground from '../../asstes/img/about-us-background.jpg';
import ServiceCard from './ServiceCard/ServiceCard';
import Gallery from './Gallery/Gallery';
import FrequentQuestions from './FrequentQuestions/FrequentQuestions';
import JoinUs from './JoinUs/JoinUs';



const AboutUs = () => {

    const { t } = useTranslation();

    useEffect(() => {
        const scrollTop = () => {
            const scrolledElement = document.getElementById('about-us');
        
            scrolledElement.scrollIntoView();
        }
        
        scrollTop()
    }, [])
    

    return (
        <section className='about-us' id='about-us'>
            <h1 className="title">{t('about-us.title')}</h1>

            <div className="img">
                <img src={aboutBackground} alt="Video de Introduccion" />
            </div>

            <div className="services">
                <ServiceCard 
                    img={serviceImg} 
                    id="hand"
                    title={t('about-us.services.hand.title')}
                    icon={handShake} 
                    reverse=""
                    description={t('about-us.services.hand.description')}
                />
                <ServiceCard 
                    img={serviceImg} 
                    id="cart"
                    title={t('about-us.services.cart.title')}
                    icon={shoopingCart} 
                    reverse="reverse"
                    description={t('about-us.services.cart.description')}
                />
                <ServiceCard 
                    img={serviceImg} 
                    id="support"
                    title={t('about-us.services.support.title')}
                    icon={supportAgent} 
                    reverse=""
                    description={t('about-us.services.support.description')}
                />
                <ServiceCard 
                    img={serviceImg} 
                    id="truck"
                    title={t('about-us.services.truck.title')}
                    icon={truck} 
                    reverse="reverse"
                    description={t('about-us.services.truck.description')}
                />
            </div>
            
            <FrequentQuestions />
            <JoinUs />
            <Gallery />

        </section>
    )
}

export default AboutUs;