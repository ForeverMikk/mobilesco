import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'


import './Footer.scss';
import logo from '../../asstes/img/mobilesco-logo.png';


const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={logo} alt="" />
                <h4>Métodos de pago</h4>
                <p>Paypal</p>
                <p>Atrato</p>
                <p>Santander, Bancomer</p>
            </div>

            <div className="menu">
                <h4>Mobilesco</h4>
                <Link to="/about-us">
                    <p>Sobre nosotros</p>
                </Link>
                <Link to="/catalog">
                    <p>Catálogo</p>
                </Link>
                <p>Visítanos</p>
                <p>Trabaja con nosotros</p>
            </div>

            <div className="help">
                <h4>Ayuda</h4>
                <p>Preguntas frecuentes</p>
                <p>Llámanos<br />771 792 7151<br />771 792 7152</p>
                <p>Cotizaciones por whatsapp<br />771 163 5991</p>
            </div>

            <div className="other">
                <h4>Otros</h4>
                <p>Términos y condiciones</p>
                <p>Políticas de privacidad</p>
                <p>Licencias</p>
            </div>

            <div className="social-media">
                <h4>Síguenos</h4>
                <div className="icons">
                    <a href="https://api.whatsapp.com/send?phone=527711635991" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://www.facebook.com/Mobilesco" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/mobilesco_oficial/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;