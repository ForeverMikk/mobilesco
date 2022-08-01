import React from 'react';
import { Link } from 'react-router-dom';

import './OurServices.scss'; 
import services from './../../../asstes/img/services.jpg';
import hand from '../../../asstes/img/hand-shake.png';
import cart from '../../../asstes/img/shopping-cart.png';
import support from '../../../asstes/img/support-agent.png';
import truck from '../../../asstes/img/truck.png';

const Service = ({icon, title, description}) => {
    return (
        <div className='service'>
            <img src={icon} alt={title} />
            <h3 className='title'>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const OurServices = () => {
    return (
     <section className='our-services'>
        <div className="img">
            <img src={services} alt="" />
        </div>

        <div className="services-home">
            <div className='services-top'>
                <Service icon={hand} title="El precio que mejor se adapta a tus necesidades" description="Precios accesibles y muebles de gran calidad." />
                <Service icon={cart} title="Políticas de retorno accesibles" description="Para nosotros, el cliente siempre es primero. Por eso queremos escuchar tus opiniones." />
            </div>
            <div className='services-bottom'>
                <Service icon={truck} title="Entrega rápida y envíos gratis" description="No esperes más, disfruta de nuestros productos de manera fácil y rápida." />
                <Service icon={support} title="Servicio y atención al cliente 24/7" description="Estamos a tu disposición en cualquier momento del día para asesórate." />
            </div>
            
            <Link to='/about-us'>
                <button>Conócenos</button>
            </Link>
        </div>
     </section>   
    )   
}

export default OurServices;