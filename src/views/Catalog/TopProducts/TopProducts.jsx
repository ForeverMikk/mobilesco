import React,{ useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './TopProducts.scss';
import defaultImg from '../../../asstes/img/silla.jpg';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../../services/productSercive';

const TopProducts = () => {

    const [topProducts, setTopProducts] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllProducts();

            setTopProducts(data.slice(0,9));
        }

        fetchData()
    }, [])
    
    return(
        <section className='top-products'>
            <div className='info'>
                <h2>Productos destacados</h2>
                <button> Ver todos</button>
            </div>

            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                   640: {
                       width: 640,
                       spaceBetween: 0,
                       slidesPerView: 1,
                   },
                   // when window width is >= 768px
                   768: {
                       width: 768,
                       spaceBetween: 20,
                       slidesPerView: 3,
                   },
               }}
                // onSlideChange={() => console.log('Sliding')}
                // onSwiper={(swiper)=> console.log(swiper)}
             >
                {topProducts && topProducts.map(({data, images}, index) => (
                    <SwiperSlide key={index}>
                        {images && images.length > 0 ?
                        <ProductItem 
                            id={data.CLAVE}
                            price={data.COSTO}
                            name={data.NOMBRE} 
                            color={data.COLOR}
                            images={images}
                            material={data.MATERIAL}
                            descripcion={data.DESCRIPCION}
                            img={`https://mobilesco.mx/API/images/uploads/${data.CLAVE}/${images[0].NOMBRE}`}
                            className="product-catalog"
                        /> : <ProductItem 
                            id={data.CLAVE}
                            price={data.COSTO}
                            name={data.NOMBRE} 
                            color={data.COLOR}
                            images={images}
                            material={data.MATERIAL}
                            descripcion={data.DESCRIPCION}
                            img={defaultImg}
                            className="product-catalog"
                        />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default TopProducts;