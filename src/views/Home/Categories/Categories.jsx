import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Categories.scss';
import category from '../../../asstes/img/category.jpg';


const Categories = () => {
    return (
        <section className='home-categories'>
            <h2 className='title'>Categorías que podrían interesarte</h2>
            <p className='subtitle'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit ipsum dolor sit amet, consectetuer adipiscing elit</p>

        <Swiper  
            className='swiper-main'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}

            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log('Sliding')}
            onSwiper={(swiper)=> console.log(swiper)} 
        >
            <SwiperSlide>
                <div className='category-card'>
                    <h3 className='title'>Escolares</h3>
                    <img src={category} alt="" />
                    <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='category-card'>
                    <h3 className='title'>Escolares</h3>
                    <img src={category} alt="" />
                    <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='category-card'>
                    <h3 className='title'>Escolares</h3>
                    <img src={category} alt="" />
                    <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='category-card'>
                    <h3 className='title'>Escolares</h3>
                    <img src={category} alt="" />
                    <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='category-card'>
                    <h3 className='title'>Escolares</h3>
                    <img src={category} alt="" />
                    <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='category-card'>
                    <h3 className='title'>Escolares</h3>
                    <img src={category} alt="" />
                    <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
            </SwiperSlide>
        </Swiper>
            
        </section>
    )
}

export default Categories;
