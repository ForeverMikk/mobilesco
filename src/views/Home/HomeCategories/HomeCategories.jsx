import React, {useEffect, useState} from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { useTranslation } from 'react-i18next';

import './HomeCategories.scss';
import CategoryCard from './CategoryCard/CategoryCard';
import { getAllCategories } from '../../../services/categoryService';

const HomeCategories = () => {

    const { t } = useTranslation();
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const getCategories = async() => {
            const categoriesGet = await getAllCategories();
            
            setCategories(categoriesGet);
        }

        getCategories()
    }, [])
    

    return (
        <section className='home-categories'>
            <h2 className='title'>{t('home.categories.title')}</h2>
            <p className='subtitle'>{t('home.categories.description')}</p>

            <Swiper  
                className='swiper-main'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        width: 640,
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                   640: {
                       width: 640,
                       spaceBetween: 10,
                       slidesPerView: 1,
                   },
                   // when window width is >= 768px
                   768: {
                       width: 768,
                       slidesPerView: 2,
                   },
                   1920: {
                        width: 1920,
                        spaceBetween: 50,
                        slidesPerView: 4,
                    },
               }}
            >

                {categories && categories.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CategoryCard 
                            title={item.cat_nombre} 
                            img={`https://mobilesco.mx/API/images/uploads/categorias/${item.cat_imagen}`} 
                            description={item.cat_descripcion} />
                    </SwiperSlide>
                ))}  
                
            </Swiper>
            
        </section>
    )
}

export default HomeCategories;
