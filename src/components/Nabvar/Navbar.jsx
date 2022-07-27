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
                <li>
                {/* <div id="higslide-div-atrato-info" 
                    data-plataform="other"  
                    data-type="info" 
                    data-price="PRECIO DEL PRODUCTO" 
                    data-version="2.0" 
                    data-style="dark"  
                    data-linkcolor="black" 
                    data-urlhost="https://app.atratopago.com">
                        Atrato
                </div> */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

