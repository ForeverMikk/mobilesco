import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './TopCarousel.scss';
import { getAllProducts } from '../../../services/productSercive';
import ProductItem from '../../../components/ProductItem/ProductItem';



const TopCarousel = () => {

    const [productsList, setProductsList] = useState();

    useEffect(() => {
      const fetchData = async()=> {
        const data = await getAllProducts();

        setProductsList(data.slice(0,5));
      }

      fetchData()
    }, [])


    return (
        <div className="top-carousel">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={10}
                slidesPerView={1}
            >
                {productsList && productsList.map(({data, images}, index) => (
                    <SwiperSlide key={index} >
                        <ProductItem 
                            id={data.CLAVE}
                            // price={data.COSTO}
                            name={data.NOMBRE} 
                            images={images}
                            descripcion={data.DESCRIPCION}
                            img={`https://mobilesco.mx/API/images/uploads/${data.CLAVE}/${images[0].NOMBRE}`}
                            category={data.CATEGORIA}
                            color={data.COLOR}
                            material={data.MATERIAL}
                            className="home" 
                            />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopCarousel;