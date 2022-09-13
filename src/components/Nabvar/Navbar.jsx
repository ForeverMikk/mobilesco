import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './Navbar.scss';
import logo from './../../asstes/img/mobilesco-logo.png';

const Navbar = () => {

    const { t, i18n } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const [languageSelected, setLanguageSelected] = useState(true);
    const productsQuantity = useSelector(state => state.cart.totalQuantity);

    const activeMenu = () => {
        setShowMenu(!showMenu);
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <nav className='navbar'>
            <Link to="/">
                <img src={logo} alt="Logo de Mobilesco" />
            </Link>

            <button className='nav-button' onClick={activeMenu}>
                <FontAwesomeIcon icon={ showMenu ? faTimes : faBars } size='2x' />
            </button>

            <ul className={ showMenu ? 'nav-menu active' : 'nav-menu'}>

                <li><Link to="/about-us" onClick={activeMenu}>{t('navbar.about-us')}</Link></li>

                <li><Link to="/catalog" onClick={activeMenu}>{t('navbar.catalog')}</Link></li>

                <li><Link to="/contact" onClick={activeMenu}>{t('navbar.contact')}</Link></li>

                <li>
                    <Link to="/wishlist" onClick={activeMenu} className='heart'>
                        <span>{productsQuantity}</span>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                </li>
                
                <li className='buttons'>
                    <button 
                        className={`language ${languageSelected ? 'active' : ''}`} 
                        onClick={() => {
                            changeLanguage('es')
                            setLanguageSelected(true);
                        }}
                    >ES</button>
                    <button 
                        className={`language ${!languageSelected ? 'active' : ''}`} 
                        onClick={() => {
                            changeLanguage('en')
                            setLanguageSelected(false);
                        }}
                    >EN</button>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;

