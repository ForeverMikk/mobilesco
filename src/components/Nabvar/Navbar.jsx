import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';
import logo from './../../asstes/img/mobilesco-logo.png';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img src={logo} alt="Logo de Mobilesco" />
                <ul className='nav-list'>
                    <li>Sobre Nosotros</li>
                    <li>Contacto</li>
                    <li>Catalogo</li>
                    <li>
                        <FontAwesomeIcon icon={faHeart} />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;

