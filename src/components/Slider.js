import Image from "next/image";
import React, { useRef, useState } from "react";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


import SliderOne from '../assets/img/sliderOne.webp'
import SliderTwo from '../assets/img/sliderTwo.webp'
import SliderThree from '../assets/img/sliderThree.webp'
import SliderFour from '../assets/img/sliderFour.webp'
import SliderFive from '../assets/img/sliderFive.webp'
import SliderSix from '../assets/img/sliderSix.webp'

export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <Image src={SliderOne} width={0} height={0} layout="fixed"/> </SwiperSlide>
        <SwiperSlide> <Image src={SliderTwo} width={0} height={0} layout="fixed"/> </SwiperSlide>
        <SwiperSlide><Image src={SliderFour} width={0} height={0} layout="fixed"/></SwiperSlide>
        <SwiperSlide><Image src={SliderFive} width={0} height={0} layout="fixed"/></SwiperSlide>
        <SwiperSlide><Image src={SliderSix} width={0} height={0} layout="fixed"/></SwiperSlide>
        <SwiperSlide> <Image src={SliderThree} width={0} height={0} layout="fixed"/> </SwiperSlide>
       
      </Swiper>

      
 
    </div>
  )
}
