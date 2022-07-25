import React from 'react';

import './Home.scss';
import silla from './../../asstes/img/sillas/silla-nueva.png';

import ProductItem from '../../components/ProductItem/ProductItem';
import SearchBox from '../../components/SearchBox/SearchBox';
import ProductList from './ProductList/ProductList';
import OurServices from './OurServices/OurServices';
import Categories from './Categories/Categories';
import MonthProduct from './MonthProduct/MonthProduct';
import Suscribe from './Suscribe/Suscribe';


const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <header>
                <div className="background">
                    <h1 className='title'>Make your interior <br /> look better</h1>
                    <ProductItem name="Silla nueva" description="La mejor silla de la Historia" img={silla} className='home' id="1" price="150"/>
                    <SearchBox />
                    <p className='description'>Si estás en busca de mobiliario de calidad entonces eres bienvenido. Tenemos diferentes tipos de muebles esperando a ser repartidos.</p>
                </div>
            </header>

            <ProductList />
            <OurServices />
            <Categories />
            <MonthProduct />
            <Suscribe />
        </>
    )
}

export default Home;