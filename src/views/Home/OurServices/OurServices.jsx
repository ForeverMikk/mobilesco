import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import './OurServices.scss'; 
import services from './../../../asstes/img/services.jpg';
import hand from '../../../asstes/img/hand-shake.png';
import cart from '../../../asstes/img/shopping-cart.png';
import support from '../../../asstes/img/support-agent.png';
import truck from '../../../asstes/img/truck.png';


const Service = ({icon, title, service}) => {
    return (
        <div className='service'>
           {service && <HashLink to={service} >
                <img src={icon} alt={title} />
            </HashLink>}
            <h3 className='title'>{title}</h3>
        </div>
        
    )
}

const OurServices = () => {

    const { t } = useTranslation();

    return (
     <section className='our-services'>
        <div className="img">
            <img src={services} alt="" />
        </div>

        <div className="services-home">
            <div className='services-top'>
                <Service 
                    icon={hand} 
                    title={t('home.services.hand')}
                    service="/about-us#hand"
                />
                <Service 
                    icon={cart} 
                    title={t('home.services.cart')}
                    service="/about-us#cart"
                />
            </div>
            <div className='services-bottom'>
                <Service 
                    icon={truck} 
                    title={t('home.services.truck')}
                    service="/about-us#truck"
                />
                <Service 
                    icon={support} 
                    title={t('home.services.support')}
                    service="/about-us#support"
                />
            </div>
            
            <Link to='/about-us'>
                <button>{t('home.services.about-us')}</button>
            </Link>
        </div>
     </section>   
    )   
}

export default OurServices;