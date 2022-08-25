import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './PromosCarousel.scss';
import video1 from '../../../asstes/videos/PostadasRedes_Mobilesco_3.mp4';
import video2 from '../../../asstes/videos/PostadasRedes_Mobilesco_1.mp4';
import video3 from '../../../asstes/videos/PostadasRedes_Mobilesco_2.mp4';
import video4 from '../../../asstes/videos/PostadasRedes_Mobilesco.mp4';

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
        <video className={`video ${name}`} autoPlay loop muted playsInline>
            <source src={video} type='video/mp4' />
        </video>
    )
}

const PromosCarousel = () => {
    return (
        <section className='promos-carousel'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                // navigation
                spaceBetween={0}
                slidesPerView={1}
                loop
                effect={"fade"}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
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