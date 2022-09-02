import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './TopCarousel.scss';
import silla from '../../../asstes/img/defaultImg.png';
import { getAllProducts } from '../../../services/productSercive';
import ProductItem from '../../../components/ProductItem/ProductItem';


const TopCarousel = () => {
    const [productsList, setProductsList] = useState();

    useEffect(() => {
      const fetchData = async()=> {
        const data = await getAllProducts();

        setProductsList(data.slice(0,9));
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
                        {images && images.length > 0 ?
                            <ProductItem 
                                key={index}
                                id={data.CLAVE}
                                name={data.NOMBRE}
                                img={`https://mobilesco.mx/API/images/uploads/${data.CLAVE}/${images[0].NOMBRE}`}
                                descripcion={data.DESCRIPCION}
                                price={data.COSTO}
                                images={images}
                                category={data.CATEGORIA}
                                color={data.COLOR}
                                type={data.TIPO}
                                material={data.MATERIAL}
                                className="home"
                            /> : <ProductItem 
                                key={index}
                                id={data.CLAVE}
                                name={data.NOMBRE}
                                img={silla}
                                descripcion={data.DESCRIPCION}
                                price={data.COSTO}
                                category={data.CATEGORIA}
                                color={data.COLOR}
                                 type={data.TIPO}
                                material={data.MATERIAL}
                                className="home"
                            />
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopCarousel;