import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../../services/productSercive';

import './ProductCarousel.scss';

const ProductCarousel = () => {

    const [productsList, setProductsList] = useState();

    useEffect(() => {
      const fetchData = async()=> {
        const data = await getAllProducts();
        
        const list = data.slice(1,7);
        
        setProductsList(list);
      }

      fetchData()
    }, [])
    
    return(
        <section className="product-carousel">
            <div className='text'>
                <h3 className="title">Nuestros productos más vendidos: </h3>
                <p className="description">Un catálogo de los muebles más populares para todo tipo de usos, encontrarás las mejores sillas, mesas, repisas, comedores, muebles de oficina y para escuelas.</p>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={0}
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
                {productsList && productsList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem 
                            id={item.CLAVE}
                            price={item.COSTO}
                            name={item.NOMBRE} 
                            description={item.DESCRIPCION}
                            img={item.IMAGEN}
                            category={item.CATEGORIA}
                            color={item.COLOR}
                            material={item.MATERIAL}
                            className="product-catalog"
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
           
        </section>
    )
}

export default ProductCarousel;
