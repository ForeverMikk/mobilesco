import React, {useEffect, useState} from 'react';

import './Home.scss';
import SearchBox from '../../components/SearchBox/SearchBox';
import PromosCarousel from './PromosCarousel/PromosCarousel';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import OurServices from './OurServices/OurServices';
import HomeCategories from './HomeCategories/HomeCategories';
import MonthProduct from './MonthProduct/MonthProduct';
import Suscribe from './Suscribe/Suscribe';
import TopCarousel from './TopCarousel/TopCarousel';
import { getProductById, getProductImages } from '../../services/productSercive';


const Home = () => {
    
    const [product, setProduct] = useState();
    const [productImages, setProductImages] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(1);
            const images = await getProductImages(1);
            
            setProductImages(images);
            console.log(images)
            setProduct(data);
        }
        fetchData()
    }, [])
          
    return (
        <>
            <header>
                {/* <Atrato /> */}
                <div className="background">
                    <h1 className='title'>Nuestra misión es transformar cada uno de tus espacios, en un lugar especial a tu medida. </h1>
                    <TopCarousel />
                    <SearchBox />
                    <SearchBox />
                    
                    <p className='description'>¿Buscas muebles multi-usuario? ¿Multi-usos? ¿Multi-gusto? Tenemos productos únicos que además de ornamentar tu espacio, se adaptan a él y lo optimizan.</p>
                </div>
            </header>

            <PromosCarousel />
            <ProductCarousel />
            <OurServices />
            <HomeCategories />
            {product && <MonthProduct 
                name={product.NOMBRE}
                descripcion={product.DESCRIPCION}
                img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages[0].NOMBRE}`}
            />}
            <Suscribe />
        </>
    )
}

export default Home;