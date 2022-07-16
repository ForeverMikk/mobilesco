import React from 'react'

import './AboutUs.scss';
import aboutBackground from '../../asstes/img/about-us-background.png';
import politicImg from '../../asstes/img/hand-shake.png';


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
            
        </section>
    )
}

export default AboutUs;