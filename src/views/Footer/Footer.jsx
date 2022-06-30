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
                <p>En efectivo</p>
            </div>

            <div className="menu">
                <h4>Mobilesco</h4>
                <p>Sobre nosotros</p>
                <p>Catálogo</p>
                <p>Sucursales</p>
                <p>Trabaja con nosotros</p>
            </div>

            <div className="help">
                <h4>Ayuda</h4>
                <p>Preguntas frecuentes</p>
                <p>Llámanos<br />+52 771 792 7151</p>
                <p>Cotizaciones por whatsapp<br />5523436209</p>
            </div>

            <div className="other">
                <h4>Otros</h4>
                <p>Términos y condiciones</p>
                <p>Políticas de privacidad</p>
                <p>Licencias</p>
            </div>

            <div className="social-media">
                <h4>Siguenos</h4>
                <div className="icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;