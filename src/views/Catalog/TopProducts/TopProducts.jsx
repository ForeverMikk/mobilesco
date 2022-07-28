import React,{ useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './TopProducts.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../../services/productSercive';

const TopProducts = () => {

    const [topProducts, setTopProducts] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllProducts();

            setTopProducts(data.slice(2,9));
        }

        fetchData()
    }, [])
    
    return(
        <section className='top-products'>
            <div className='info'>
                <h2>Top Sillas</h2>
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
                {topProducts && topProducts.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem 
                            id={item.CLAVE}
                            price={item.COSTO}
                            name={item.NOMBRE} 
                            description={item.DESCRIPCION}
                            img={item.IMAGEN}
                            className="product-catalog"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default TopProducts;