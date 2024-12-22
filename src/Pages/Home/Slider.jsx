import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img from '../../assets/images/volunteers2.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 2000, // Delay in milliseconds (3 seconds here)
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.6}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
