import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import './Categories.scss';
import category from '../../../asstes/img/category.jpg';

const categories = [
    {
        name: "Escolares",
        img: category,
        description: "Eres parte de una institución escolar y buscas llenar las aulas ¡Este lugar es para ti!"
    },
    {
        name: "De Oficina",
        img: category,
        description: "Eres un empresario, emprendedor o parte de una gran organización, aquí podemos mostrarte todo lo que necesitas para equipar oficinas"
    },
    {
        name: "Escolares 2",
        img: category,
        description: "Te presentamos un catálogo exclusivo de mobiliario escolar para la mayor comodidad de los estudiantes, maestros y administrativos"
    },
    {
        name: "De Oficina 2",
        img: category,
        description: "Te mostramos un catálogo exclusivo para mobiliario de oficina, para la mejorar la eficiencia de los trabajadores en un espacio cómodo"
    },
    {
        name: "De Casa",
        img: category,
        description: "¡Tenemos todo lo que buscas! Mesas, sillas, comedores, sillones, alacenas, etc."
    },
    {
        name: "Otros",
        img: category,
        description: "Contamos con muebles versátiles que se pueden acomodar en cualquier espacio"
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
            <p className='subtitle'>Te ayudamos en la búsqueda de lo que necesitas con nuestro gran catálogo. Te presentamos muebles con todo tipo de usos.</p>

            <Swiper  
                className='swiper-main'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        width: 640,
                        spaceBetween: 0,
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
                       slidesPerView: 3,
                   },
               }}
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
