import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { useTranslation } from 'react-i18next';


import './CategoriesPopular.scss';
import CategorieBox from '../../../components/CategorieBox/CategorieBox';

const CategoriesPopular = ({ setProductList, productList, setIsSearched, isSearched }) => {

    const { t } = useTranslation();
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
                <h2>{t('catalog.categories.title')}</h2>
                <button>{t('catalog.categories.button')}</button>
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
                    <CategorieBox items={sillas} title={t('catalog.categories.chairs')} />
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={mesas} title={t('catalog.categories.tables')}/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={archiveros} title={t('catalog.categories.archivists')}/>
                </SwiperSlide>                

                <SwiperSlide>
                    <CategorieBox items={sillasPaleta} title={t('catalog.categories.pallet-chairs')}/>
                </SwiperSlide>

                <SwiperSlide>
                    <CategorieBox items={libreros} title={t('catalog.categories.bookcase')}/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <CategorieBox items={mueblesGuardado} title={t('catalog.categories.storage-furniture')}/>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}


export default CategoriesPopular;