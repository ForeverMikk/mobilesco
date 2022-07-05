import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import './CategoriesPopular.scss';
import CategorieBox from '../../../components/CategorieBox/CategorieBox';

import silla1 from '../../../asstes/img/sillas/silla-1.jpg';
import silla2 from '../../../asstes/img/sillas/silla-2.jpg';
import silla3 from '../../../asstes/img/sillas/silla-3.jpg';
import silla4 from '../../../asstes/img/sillas/silla-4.jpg';

import mesa1 from '../../../asstes/img/mesas/mesa-1.jpg';
import mesa2 from '../../../asstes/img/mesas/mesa-2.jpg';
import mesa3 from '../../../asstes/img/mesas/mesa-3.jpg';
import mesa4 from '../../../asstes/img/mesas/mesa-4.jpg';

import escritorio1 from '../../../asstes/img/escritorios/escritorio-1.jpg';
import escritorio2 from '../../../asstes/img/escritorios/escritorio-2.jpg';
import escritorio3 from '../../../asstes/img/escritorios/escritorio-3.jpg';
import escritorio4 from '../../../asstes/img/escritorios/escritorio-4.jpg';

const sillas = [silla1, silla2, silla3, silla4];
const mesas = [mesa1, mesa2, mesa3, mesa4];
const escritorios = [escritorio1, escritorio2, escritorio3, escritorio4];

const CategoriesPopular = () => {
    return (
        <section className='categories-box'>
            <div className="info">
                <h2>Categorias populares</h2>
                <button>Ver todas</button>
            </div>
            
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('Sliding')}
                onSwiper={(swiper)=> console.log(swiper)} 
             >
                <SwiperSlide>
                    <CategorieBox items={sillas} title="Sillas de Oficina"/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={mesas} title="Escritorios de Oficina"/>
                </SwiperSlide>                

                <SwiperSlide>
                    <CategorieBox items={escritorios} title="Mesas de Oficina"/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={escritorios} title="Mesas de Oficina"/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={escritorios} title="Mesas de Oficina"/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={escritorios} title="Mesas de Oficina"/>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}


export default CategoriesPopular;