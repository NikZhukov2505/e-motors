import React from 'react';
import './SwiperAbout.css'
import 'swiper/css/bundle';
import { Pagination, A11y, Keyboard, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import slideAboutImg from './../../assets/SwiperAbout.jpg'
import honda from './../../assets/hondaBg.jpg'
import teslaSwiperAbout from './../../assets/teslaSwiperAbout.jpg'

const SwiperAbout = () => {
    return (
        <Swiper className='SwiperAbout'
            modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
            spaceBetween={100}
            slidesPerView={1}
            loop
            keyboard
            speed={1300}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}

            pagination={{ clickable: true }}
            effect='fade'
        >
            <SwiperSlide >
                <div className='slideAbout-Card'>
                    <div className="about_box-img">
                        <img src={slideAboutImg} alt="slideAboutImg" />
                    </div>
                    <div className="about_box-title">
                        <div className="about_center-box-title">
                            <h2>о нас</h2>
                            <p>Наша компания занимается доставкой и продажей электромобилей из Китая под заказ. Мы работаем только с проверенными автопроизводителями, сотрудники нашего офиса в Китае, проверяют каждый автомобиль перед покупкой. Электромобили, которые везем под заказ находятся на нашей площадке в Китае, а те электромобили, которые уже есть на площадке в Бишкеке, доступны к продаже уже сейчас.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideAbout-Card'>
                    <div className="about_box-img">
                        <img src={honda} alt="honda" />
                    </div>
                    <div className="about_box-title">
                        <div className="about_center-box-title">
                            <h2>о нас</h2>
                            <p>Наша компания занимается доставкой и продажей электромобилей из Китая под заказ. Мы работаем только с проверенными автопроизводителями, сотрудники нашего офиса в Китае, проверяют каждый автомобиль перед покупкой. Электромобили, которые везем под заказ находятся на нашей площадке в Китае, а те электромобили, которые уже есть на площадке в Бишкеке, доступны к продаже уже сейчас.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideAbout-Card'>
                    <div className="about_box-img">
                        <img src={teslaSwiperAbout} alt="teslaSwiperAbout" />
                    </div>
                    <div className="about_box-title">
                        <div className="about_center-box-title">
                            <h2>о нас</h2>
                            <p>Наша компания занимается доставкой и продажей электромобилей из Китая под заказ. Мы работаем только с проверенными автопроизводителями, сотрудники нашего офиса в Китае, проверяют каждый автомобиль перед покупкой. Электромобили, которые везем под заказ находятся на нашей площадке в Китае, а те электромобили, которые уже есть на площадке в Бишкеке, доступны к продаже уже сейчас.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperAbout;