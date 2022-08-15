import React, { useEffect } from 'react'

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

const scrollTop = () => {
    const scrolledElement = document.getElementById('about-us');

    scrolledElement.scrollIntoView();
}


const AboutUs = () => {

    useEffect(() => {
        scrollTop()
    }, [])
    

    return (
        <section className='about-us' id='about-us'>
            <h1 className="title">Más de 20 años de experiencia nos respaldan…</h1>

            <div className="img">
                <img src={aboutBackground} alt="Short video of introduction" />
            </div>

            <div className="services">
                <ServiceCard 
                    img={serviceImg} 
                    title="Es momento de elegir tu relación ideal: la mayor satisfacción, al mejor precio." 
                    icon={handShake} 
                    description="Nuestra capacidad depende del tamaño de nuestros clientes. Contamos con una gran infraestructura instalada que nos permite atender y satisfacer una gran demanda. " 
                />
                <ServiceCard 
                    img={serviceImg} 
                    title="Una amplia variedad de opciones de productos, para que elijas a tu manera." 
                    icon={shoopingCart} 
                    reverse="reverse"
                    description="La atención al detalle es nuestro valor agregado : Por ello aseguramos la calidad a partir de procesos estandarizados y supervisados para entregarte, nada más y nada menos que el mejor resultado. " 
                />
                <ServiceCard 
                    img={serviceImg} 
                    title="Presupuestamos tu proyecto en tiempo récord , servicio y atención al cliente como siempre lo quisiste." 
                    icon={supportAgent} 
                    description="Equipo altamente capacitado: Nuestros colaboradores son nuestra familia, por lo que la amplia trayectoria en la industria nos motiva a realizar un trabajo de gran calidad, basado en empatía , cuidado y eficiencia. " 
                />
                <ServiceCard 
                    img={serviceImg} 
                    title="Políticas de reparación accesibles para todo el catálogo, calidad garantizada." 
                    icon={truck} 
                    reverse="reverse"
                    description="Nuestros clientes son nuestros mejores aliados: La satisfacción de los clientes es nuestro principal motor, por ello cuidamos nuestras relaciones a partir de la entrega  y el servicio puntual al cliente. " 
                />
            </div>
            
            <FrequentQuestions />
            <JoinUs />
            <Gallery />

        </section>
    )
}

export default AboutUs;