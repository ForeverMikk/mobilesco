import React from 'react'

import './AboutUs.scss';
import serviceImg from '../../asstes/img/services.jpg';
import handShake from '../../asstes/img/hand-shake.png';
import shoopingCart from '../../asstes/img/shopping-cart.png';
import supportAgent from '../../asstes/img/support-agent.png';
import truck from '../../asstes/img/truck.png';

import aboutBackground from '../../asstes/img/about-us-background.png';
import politicImg from '../../asstes/img/hand-shake.png';
import ServiceCard from './ServiceCard/ServiceCard';
import Gallery from './Gallery/Gallery';



const Politic = ({icon, title, description}) => {
    return (
        <div className='politic'>
            <img src={icon} alt={title} />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
const AboutUs = () => {
    return (
        <section className='about-us'>
            <h1 className="title">Los años nos respaldan... </h1>

            <div className="img">
                <img src={aboutBackground} alt="Short video of introduction" />
            </div>

            <div className="politics">
               <Politic title="Políticas de retorno accesibles" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" icon={politicImg} />
               <Politic title="Políticas de retorno accesibles" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" icon={politicImg} />
               <Politic title="Políticas de retorno accesibles" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" icon={politicImg} />
            </div>

            <div className="services">
                <ServiceCard 
                    img={serviceImg} 
                    title="El precio que mejor se te acomoda" 
                    icon={handShake} 
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" 
                />
                <ServiceCard 
                    img={serviceImg} 
                    title="El precio que mejor se te acomoda" 
                    icon={shoopingCart} 
                    reverse="reverse"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" 
                />
                <ServiceCard 
                    img={serviceImg} 
                    title="El precio que mejor se te acomoda" 
                    icon={supportAgent} 
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" 
                />
                <ServiceCard 
                    img={serviceImg} 
                    title="El precio que mejor se te acomoda" 
                    icon={truck} 
                    reverse="reverse"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" 
                />
            </div>
            
            <Gallery />

        </section>
    )
}

export default AboutUs;