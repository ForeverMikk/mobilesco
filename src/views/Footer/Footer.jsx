import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


import './Footer.scss';
import logo from '../../asstes/img/mobilesco-logo.png';
import atrato from '../../asstes/img/icons/atrato.svg';
import bbva from '../../asstes/img/icons/bbva.svg';
import paypal from '../../asstes/img/icons/paypal.svg';
import santander from '../../asstes/img/icons/santander.svg';


const Footer = () => {
    
    const { t } = useTranslation();

    return (
        <footer>
            <img className='logo' src={logo} alt="" />

            <div className="sections">
                <div className="pay-methods">
                    <h4>{t('footer.payment')}</h4>
                    <p><img src={santander} alt="Pago con Santander" /></p>
                    <p><img src={bbva} alt="Pago con Bancomer" /></p>
                    <p><img src={paypal} alt="Pago con Paypal" /></p>
                    <p><img src={atrato} alt="Pago con Atrato" /></p>
                </div>

                <div className="menu">
                    <h4>Mobilesco</h4>
                    <Link to="/about-us">
                        <p>{t('footer.menu.about-us')}</p>
                    </Link>
                    <Link to="/catalog">
                        <p>{t('footer.menu.catalog')}</p>
                    </Link>
                    <Link to='/contact'>
                        <p>{t('footer.menu.contact')}</p>
                    </Link>
                    <Link to='/contact'>
                        <p>{t('footer.menu.contact2')}</p>
                    </Link>
                </div>

                <div className="help">
                    <h4>{t('footer.help.title')}</h4>
                    <p>{t('footer.help.frequent-questions')}</p>
                    <p>{t('footer.help.call')} <br /><span >771 792 7151</span><br /><span>771 792 7152</span></p>
                    <a href="https://api.whatsapp.com/send?phone=527711635991" target="_blank" rel='noopener noreferrer'>
                        <p>{t('footer.help.whatsapp')}<br />771 163 5991</p>
                    </a>
                </div>

                <div className="other">
                    <h4>{t('footer.other.title')}</h4>
                    <p>{t('footer.other.terms')}</p>
                    <p>{t('footer.other.politics')}</p>
                    <p>{t('footer.other.licences')}</p>
                </div>

                <div className="social-media">
                    <h4>{t('footer.social-media')}</h4>
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
            </div>
        </footer>
    )
}

export default Footer;