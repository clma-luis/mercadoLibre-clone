import React, {  useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import Car from '../Icons/Car'
import Sofa from '../Icons/Sofa'
import Cellphone from '../Icons/Cellphone'
import Screen from '../Icons/Screen'
import Microphone from '../Icons/Microphone'
import Oven from '../Icons/oven'
import Shirt from '../Icons/shirt'
import Sport from '../Icons/sport'
import Toys from '../Icons/Toys'
import Watch from '../Icons/Watch'
import Beauty from '../Icons/Beauty'
import Gamer from '../Icons/Gamer'
import SteeringWheel from '../Icons/SteeringWheel'
import Pet from '../Icons/Pet'
import Art from '../Icons/Art'
import BabyClothes from '../Icons/BabyClothes'


// import required modules
import { Grid, Pagination, Navigation } from 'swiper'

export default function App() {
  const [hover, setHover] = useState(false)

  return (
    <div className='m-10' 
    onMouseEnter={() => {
      setHover(!hover)
    }}
    onMouseLeave={() => {
      setHover(false)
    }}
    >
      <h1 className="mb-6 text-4xl text-gray-400">Categorías populares</h1>
      <Swiper
       breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        641: {
          width: 900,
          slidesPerView: 5,
        },
        1200: {
          width: 1200,
          slidesPerView: 6,
        },
      }}
        
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={hover}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white">
            <Sofa className="" width={45} heigh={45} />
            <p className="text-sm">Hogar, Muebles y Jardín</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white mb-8 ">
            <Cellphone className="" width={45} heigh={45} />
            <p className="text-sm">Celulares y teléfonos</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Screen className="" width={45} heigh={45} />
            <p className="text-sm">Computación</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Microphone className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Oven className="" width={55} heigh={65} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Shirt className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Sport className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Car className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Toys className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Watch className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Beauty className="" width={60} heigh={50} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Gamer className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <SteeringWheel className="" width={50} heigh={50} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Pet className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
       
      
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <Art className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
          <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center fill-current text-blue-500 hover:bg-blue-500 hover:text-white ">
            <BabyClothes className="" width={45} heigh={45} />
            <p className="text-sm">Autos, Motos y Otros</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
