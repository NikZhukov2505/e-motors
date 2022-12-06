import { useState } from 'react';
import './SwiperDetail.css'
import { FreeMode, Navigation, Thumbs, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import slideImg1 from './../../../assets/swiper3.jpg'
import slideImg2 from './../../../assets/teslaBg.jpg'
import slideImg3 from './../../../assets/teslaSwiperAbout.jpg'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const SwiperDetail = () => {
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
                className='SwiperDetail'
            >
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={slideImg1}>
                        <img src={slideImg1} />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={slideImg2}>
                        <img src={slideImg2} />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={slideImg3}>
                        <img src={slideImg3} />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={slideImg1}>
                        <img src={slideImg1} />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={slideImg2}>
                        <img src={slideImg2} />
                    </a>
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="SwiperDetail_mini"
            >
                <SwiperSlide className='SwiperCardDetail_mini' >
                    <img src={slideImg1} />
                </SwiperSlide>
                <SwiperSlide className='SwiperCardDetail_mini'>
                    <img src={slideImg2} />
                </SwiperSlide>
                <SwiperSlide className='SwiperCardDetail_mini'>
                    <img src={slideImg3} />
                </SwiperSlide>
                <SwiperSlide className='SwiperCardDetail_mini'>
                    <img src={slideImg3} />
                </SwiperSlide>
                <SwiperSlide className='SwiperCardDetail_mini' >
                    <img src={slideImg1} />
                </SwiperSlide>
                <SwiperSlide className='SwiperCardDetail_mini'>
                    <img src={slideImg2} />
                </SwiperSlide>
            </Swiper>
        </LightGallery>
    );
};

export default SwiperDetail;