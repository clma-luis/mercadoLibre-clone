import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Store from './Store'
import { data } from './data.js'
import img1 from './img/EFE.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function BestStores() {
  const [hover, setHover] = useState(false)

  return (
    <div
      className=" select-none pt-10"
      onMouseEnter={() => {
        setHover(!hover)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <h1 className="mb-6 text-4xl text-gray-400">Mejores Tiendas</h1>
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
            slidesPerView: 2,
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
        modules={[Pagination, Navigation]}
      >
        {data.map(
          (item: {
            id: React.Key | null | undefined
            name: string
            image: any
            logo: string
            productPost: any
          }) => {
            return (
              <SwiperSlide className="flex justify-center" key={item.id}>
                {
                  <Store
                    name={item.name}
                    image={item.image}
                    logo={item.logo}
                    productPost={item.productPost}
                  />
                }
              </SwiperSlide>
            )
          }
        )}
      </Swiper>
    </div>
  )
}
