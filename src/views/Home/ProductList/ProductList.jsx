import React from 'react';
import silla from '../../../asstes/img/sillas/silla-nueva.png';
import ProductItem from '../../../components/ProductItem/ProductItem';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import './ProductList.scss';

const sillas = [
    {
        name: "Silla Chida 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        img: silla,
        className: "catalog"
    },{
        name: "Silla Chida 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        img: silla,
        className: "catalog"
    },{
        name: "Silla Chida 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        img: silla,
        className: "catalog"
    },{
        name: "Silla Chida 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        img: silla,
        className: "catalog"
    },{
        name: "Silla Chida 5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        img: silla,
        className: "catalog"
    },{
        name: "Silla Chida 6",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        img: silla,
        className: "catalog"
    }
]

const ProductList = () => {
    return(
        <section className="product-list">
            <div className='text'>
                <h3 className="title">Nuestros Productos más vendidos</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci repudiandae necessitatibus autem eveniet quis ea iusto.</p>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}

                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log('Sliding')}
                onSwiper={(swiper)=> console.log(swiper)}
            >
                {sillas.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem 
                            id={index}
                            price={item.price}
                            name={item.name} 
                            description={item.description}
                            img={item.img}
                            className={item.className}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
           
        </section>
    )
}

export default ProductList;
