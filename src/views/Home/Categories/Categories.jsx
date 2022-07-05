import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import './Categories.scss';
import category from '../../../asstes/img/category.jpg';

const categories = [
    {
        name: "Escolares",
        img: category,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
        name: "DE Oficina",
        img: category,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
        name: "Escolares 2",
        img: category,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
        name: "De Oficina 2",
        img: category,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
        name: "De Casa",
        img: category,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
        name: "Otros",
        img: category,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },

]

const CategoryCard = ({title, img, description}) => {
    return(
        <div className='category-card'>
            <h3 className='title'>{title}</h3>
            <img src={img} alt={title} />
            <p className="description">{description}</p>
        </div>
    )
}


const Categories = () => {
    return (
        <section className='home-categories'>
            <h2 className='title'>Categorías que podrían interesarte</h2>
            <p className='subtitle'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit ipsum dolor sit amet, consectetuer adipiscing elit</p>

            <Swiper  
                className='swiper-main'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}

                spaceBetween={30}
                slidesPerView={4}
                onSlideChange={() => console.log('Sliding')}
                onSwiper={(swiper)=> console.log(swiper)} 
            >

                {categories.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CategoryCard title={item.name} img={item.img} description={item.description} />
                    </SwiperSlide>
                ))}  
                
            </Swiper>
            
        </section>
    )
}

export default Categories;
