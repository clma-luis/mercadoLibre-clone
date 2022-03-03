import React, { useEffect, useState } from 'react'
import Product1 from './Product'

import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function ProductsHome({ title }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="select-none pt-10"
      onMouseEnter={() => {
        setHover(!hover)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <h1 className="mb-6 text-4xl text-gray-400">{title}</h1>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          641: {
            width: 641,
            slidesPerView: 3,
          },
          1200: {
            width: 1200,
            slidesPerView: 4,
          },
        }}
        grabCursor={true}
        width="350"
        spaceBetween={10}
        centeredSlides={false}
        navigation={hover}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
        <SwiperSlide className="flex justify-center">{Product1}</SwiperSlide>
      </Swiper>
    </div>
  )
}
