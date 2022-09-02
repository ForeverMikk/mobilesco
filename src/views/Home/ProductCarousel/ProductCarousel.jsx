import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import './ProductCarousel.scss';
import silla from '../../../asstes/img/defaultImg.png';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../../services/productSercive';
import { useTranslation } from 'react-i18next';

const ProductCarousel = () => {

    const { t } = useTranslation();
    const [productsList, setProductsList] = useState();

    useEffect(() => {
      const fetchData = async()=> {
        const data = await getAllProducts();

        setProductsList(data.slice(0,9));
      }

      fetchData()
    }, [])
    
    return(
        <section className="product-carousel">
            <div className='text'>
                <h3 className="title">{t('home.carousel.title')}</h3>
                <p className="description">{t('home.carousel.description')}</p>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        width: 320,
                        slidesPerView: 1,
                    },
                     // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}  
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                
                // onSlideChange={() => console.log('Sliding')}
                // onSwiper={(swiper)=> console.log(swiper)}
            >
                {productsList && productsList.map(({data, images}, index) => (
                    <SwiperSlide key={index}>
                         {images && images.length > 0 ? 
                            <ProductItem 
                                id={data.CLAVE}
                                // price={data.COSTO}
                                name={data.NOMBRE} 
                                images={images}
                                descripcion={data.DESCRIPCION}
                                img={`https://mobilesco.mx/API/images/uploads/${data.CLAVE}/${images[0].NOMBRE}`}
                                category={data.CATEGORIA}
                                color={data.COLOR}
                                type={data.TIPO}
                                material={data.MATERIAL}
                                className="product-catalog"
                            /> : <ProductItem 
                                id={data.CLAVE}
                                // price={data.COSTO}
                                name={data.NOMBRE} 
                                images={images}
                                descripcion={data.DESCRIPCION}
                                img={silla}
                                type={data.TIPO}
                                category={data.CATEGORIA}
                                color={data.COLOR}
                                material={data.MATERIAL}
                                className="product-catalog"
                            /> 
                         }
                    </SwiperSlide>
                ))}
            </Swiper>
           
        </section>
    )
}

export default ProductCarousel;
