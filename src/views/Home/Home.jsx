import React, {useEffect, useState} from 'react';

import './Home.scss';
import ProductItem from '../../components/ProductItem/ProductItem';
import SearchBox from '../../components/SearchBox/SearchBox';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import OurServices from './OurServices/OurServices';
import Categories from './Categories/Categories';
import MonthProduct from './MonthProduct/MonthProduct';
import Suscribe from './Suscribe/Suscribe';
import { getProductById, getProductImages } from '../../services/productSercive';


const Home = () => {
    
    const [product, setProduct] = useState();
    const [productImages, setProductImages] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(1);
            const images = await getProductImages(1);
            
            setProductImages(images[2]);
            setProduct(data);
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
                        img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages.NOMBRE}`} 
                        className="home"
                        id={product.CLAVE}
                        price={parseInt(product.COSTO)}
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
            {product && <MonthProduct 
                name={product.NOMBRE}
                description={product.DESCRIPCION}
                img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages.NOMBRE}`}
            />}
            <Suscribe />
        </>
    )
}

export default Home;