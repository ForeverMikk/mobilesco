import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';
import logo from './../../asstes/img/mobilesco-logo.png';

const Navbar = () => {

    const productsQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <>
            <nav className='navbar'>
                <Link to="/">
                    <img src={logo} alt="Logo de Mobilesco" />
                </Link>
                <ul className='nav-list'>
                    <li>
                        <Link to="/about-us">Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catálogo</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <span>{productsQuantity}</span>
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;

