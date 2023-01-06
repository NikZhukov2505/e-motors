import { useState } from 'react';
import './SwiperDetail.css'
import { FreeMode, Navigation, Thumbs, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import parts from './../../../assets/parts.png'
import parts2 from './../../../assets/teslaBg.jpg'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const SwiperDetailParts = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <LightGallery
            selector={'.gallery_item'}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <Swiper
                modules={[FreeMode, Navigation, Thumbs, Keyboard]}
                style={{
                    "--swiper-navigation-color": "#FFCD00",
                    "--swiper-pagination-color": "#FFCD00",
                }}
                loop={true}
                navigation={true}
                keyboard
                thumbs={{ swiper: thumbsSwiper }}
                className='SwiperDetailParts'
            >
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={parts}>
                        <img src={parts2} alt={'parts'} />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={parts}>
                        <img src={parts} alt={'parts'} />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={parts}>
                        <img src={parts} alt={'parts'} />
                    </a>
                </SwiperSlide>


            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="SwiperDetailParts_mini"
            >
                <SwiperSlide className='SwiperCardDetail_mini' >
                    <img src={parts2} alt={'parts'} />
                </SwiperSlide>

                <SwiperSlide className='SwiperCardDetail_mini'>
                    <img src={parts} alt={'parts'} />
                </SwiperSlide>
                <SwiperSlide className='SwiperCardDetail_mini'>
                    <img src={parts} alt={'parts'} />
                </SwiperSlide>

            </Swiper>
        </LightGallery>
    );
};

export default SwiperDetailParts;