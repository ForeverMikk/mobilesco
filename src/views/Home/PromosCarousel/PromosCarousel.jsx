import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './PromosCarousel.scss';
import video1 from '../../../asstes/videos/PostadasRedes_Mobilesco.mp4';
import video2 from '../../../asstes/videos/PostadasRedes_Mobilesco_1.mp4';
import video3 from '../../../asstes/videos/PostadasRedes_Mobilesco_2.mp4';
import video4 from '../../../asstes/videos/PostadasRedes_Mobilesco_3.mp4';

const promos = [
    {
        name: 'video-promo1',
        video: video1
    },
    {
        name: 'video-promo2',
        video: video2
    },
    {
        name: 'video-promo3',
        video: video3
    },
    {
        name: 'video-promo4',
        video: video4
    }
]


const Video = ({video, name}) => {
    return (
        <video controls className={name}>
            <source src={video} type='video/mp4' />
        </video>
    )
}

const PromosCarousel = () => {
    return (
        <section className='promos Carousel'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={0}
                slidesPerView={1}
            >
                {promos.map(({video, name}) => (
                    <SwiperSlide key={name}>
                        <Video name={name} video={video} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default PromosCarousel;