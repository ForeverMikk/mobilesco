import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';
import logo from './../../asstes/img/mobilesco-logo.png';

const Navbar = () => {

    const [buttonClicked, setButtonClicked] = useState();
    const productsQuantity = useSelector(state => state.cart.totalQuantity);

    const activeMenu = () => {
        setButtonClicked(!buttonClicked);
    }

    return (
        <nav className='navbar'>
            <Link to="/">
                <img src={logo} alt="Logo de Mobilesco" />
            </Link>

            <button className='menu-button' onClick={activeMenu}>
                <FontAwesomeIcon icon={ buttonClicked ? faTimes : faBars } size='2x' />
            </button>

            <ul className={ buttonClicked ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to="/about-us" onClick={activeMenu}>Sobre Nosotros</Link></li>

                <li><Link to="/contact" onClick={activeMenu}>Contacto</Link></li>

                <li><Link to="/catalog" onClick={activeMenu}>Catálogo</Link></li>

                <li>
                    <Link to="/wishlist" onClick={activeMenu}>
                        <span>{productsQuantity}</span>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

