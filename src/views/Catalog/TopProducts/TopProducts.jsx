import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import './TopProducts.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';

import silla1 from '../../../asstes/img/sillas/silla-5.jpg';
import silla2 from '../../../asstes/img/sillas/silla-6.jpg';
import silla3 from '../../../asstes/img/sillas/silla-7.jpg';

const sillasTop = [
    {
        title: "Silla 1",
        img: silla1
    },
    {
        title: "Silla 2",
        img: silla2
    },
    {
        title: "Silla 3",
        img: silla3
    },
    {
        title: "Silla 1",
        img: silla1
    },
    {
        title: "Silla 2",
        img: silla2
    },
    {
        title: "Silla 3",
        img: silla3
    },
]

const TopProducts = ({img, title}) => {
    return(
        <section className='top-products'>
            <div>
                <h2 className="title">Top Sillas</h2>
                <button> Ver todos</button>
            </div>

            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('Sliding')}
                onSwiper={(swiper)=> console.log(swiper)}
             >
                {sillasTop.map(({img, title}) => (
                    <SwiperSlide key={title}>
                        <ProductItem img={img} name={title} className="catalog"/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default TopProducts;