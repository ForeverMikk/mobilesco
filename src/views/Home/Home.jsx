import React, {useEffect, useState} from 'react';

import './Home.scss';

import ProductItem from '../../components/ProductItem/ProductItem';
import SearchBox from '../../components/SearchBox/SearchBox';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import OurServices from './OurServices/OurServices';
import Categories from './Categories/Categories';
import MonthProduct from './MonthProduct/MonthProduct';
import Suscribe from './Suscribe/Suscribe';
import { getProductById } from '../../services/produtcSercive';


const Home = () => {
    
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(3);
            setProduct(data[0])
        }
        fetchData()
    }, [])
          
    return (
        <>
            <header>
                <div className="background">
                    <h1 className='title'>Make your interior <br /> look better</h1>
                    {product && <ProductItem 
                        name={product.NOMBRE} 
                        description={product.DESCRIPCION}
                        img={product.IMAGEN} 
                        className="home"
                        id={product.CLAVE}
                        price={product.COSTO}
                        category={product.CATEGORIA}
                        color={product.COLOR}
                        material={product.MATERIAL}
                    />}
                    <SearchBox />
                    <p className='description'>Si estás en busca de mobiliario de calidad entonces eres bienvenido. Tenemos diferentes tipos de muebles esperando a ser repartidos.</p>
                </div>
            </header>

            <ProductCarousel />
            <OurServices />
            <Categories />
            <MonthProduct />
            <Suscribe />
        </>
    )
}

export default Home;