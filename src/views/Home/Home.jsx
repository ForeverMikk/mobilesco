import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

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
    
    const { t } = useTranslation();
    const [product, setProduct] = useState();
    const [productImages, setProductImages] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(79);
            const images = await getProductImages(79);
            
            setProduct(data);
            setProductImages(images);
            // console.log("img", images)
            // console.log("data", data)
        }
        fetchData()
    }, [])
          
    return (
        <>
            <header>
                {/* <Atrato /> */}
                <div className="background">
                    <h1 className='title'>{t('home.title')}</h1>
                    <TopCarousel />
                    <SearchBox />
                    <p className='description'>{t('home.description')}</p>
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
                id={product.CLAVE}
                category={product.CATEGORIA}
                color={product.COLOR}
                material={product.MATERIAL}
            />}
            <Suscribe />
        </>
    )
}

export default Home;