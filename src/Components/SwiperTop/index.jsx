import React from 'react';
import './SwiperTop.css'


import { Pagination, A11y, Keyboard, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import honda from './../../assets/hondaBg.jpg'
import tesla from './../../assets/teslaBg.jpg'


const SwiperTop = () => {
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
            spaceBetween={100}
            slidesPerView={1}
            loop
            keyboard
            speed={2000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            className='SwiperTop'
            pagination={{ clickable: true }}
            effect='fade'


        >
            <SwiperSlide>
                <div className='slideCard'>
                    <img src={honda} alt="honda" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideCard'>
                    <img src={tesla} alt="honda" />
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default SwiperTop;