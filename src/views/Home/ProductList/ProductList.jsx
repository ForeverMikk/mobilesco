import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../../../components/ProductItem/ProductItem';

import './ProductList.scss';
import { getAllProducts } from '../../../services/produtcSercive';

const ProductList = () => {

    const [productsList, setProductsList] = useState();

    useEffect(() => {
      const fetchData = async()=> {
        const data = await getAllProducts();
        const list = data.slice(2,7)
        
        setProductsList(list);
      }

      fetchData()
    }, [])
    
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
                {productsList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem 
                            id={item.CLAVE}
                            price={item.COSTO}
                            name={item.NOMBRE} 
                            description={item.DESCRIPCION}
                            img={item.IMAGEN}
                            className="catalog"
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
           
        </section>
    )
}

export default ProductList;
