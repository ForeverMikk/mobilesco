import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import './CategoriesPopular.scss';
import CategorieBox from '../../../components/CategorieBox/CategorieBox';

const CategoriesPopular = ({ setProductList, productList, setIsSearched, isSearched }) => {

    const [sillas, setSillas] = useState([]);
    const [archiveros, setArchiveros] = useState([]);
    const [sillasPaleta, setSillasPaleta] = useState([]);
    const [libreros, setLibreros] = useState([]);
    const [mesas, setMesas] = useState([]);
    const [mueblesGuardado, setMueblesGuardado] = useState([]);
    
    

    useEffect(() => {
        const getProductByType = (type) => {
            const filtered = productList.filter(item => {
                const productType = item.data.TIPO.toLowerCase();
    
                return productType.indexOf(type) >= 0;
            });
    
            // console.log(type, filtered);
            return filtered;
        }

        const sillasFiltered = getProductByType('sillas');
        setSillas(sillasFiltered.slice(0,4));

        const archiverosFiltered = getProductByType('archiveros');
        setArchiveros(archiverosFiltered.slice(0,4));
        
        const sillasPaletaFiltered = getProductByType('sillas con paleta');
        setSillasPaleta(sillasPaletaFiltered.slice(0,4));
        
        const librerosFiltered = getProductByType('libreros');
        setLibreros(librerosFiltered.slice(0,4));
        
        const mesasFiltered = getProductByType('mesas');
        setMesas(mesasFiltered.slice(0,4));
        
        const guardadoFiltered = getProductByType('muebles de guardado');
        setMueblesGuardado(guardadoFiltered.slice(0,4));

    }, [productList])
    
    return (
        <section className='categories-popular'>
            <div className="info">
                <h2>Categorias</h2>
                <button>Ver todas</button>
            </div>
            
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                   640: {
                       width: 640,
                       slidesPerView: 1,
                   },
                   // when window width is >= 768px
                   768: {
                       width: 768,
                       slidesPerView: 2,
                   },
               }}
                // onSlideChange={() => console.log('Sliding')}
                // onSwiper={(swiper)=> console.log(swiper)} 
             >
                <SwiperSlide>
                    <CategorieBox items={sillas} title="Sillas" />
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={archiveros} title="Archiveros"/>
                </SwiperSlide>                

                <SwiperSlide>
                    <CategorieBox items={sillasPaleta} title="Sillas con Paleta"/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={libreros} title="Libreros"/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={mesas} title="Mesas"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <CategorieBox items={mueblesGuardado} title="Muebles de Guardado"/>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}


export default CategoriesPopular;