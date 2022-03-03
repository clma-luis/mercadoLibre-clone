import Image from 'next/image'
import efePost from './img/EFE.jpg'
import { data } from './data'

export default function Store({ name, image, logo, productPost }) {
  return (
    <div className="relative h-96 w-64 rounded border-2 border-gray-300 bg-slate-200 hover:bg-white hover:text-sky-500">
      <div className="overflow-hidden rounded-t">
        <Image
          className=""
          src={image}
          width={253}
          height={100}
          layout="responsive"
        />
      </div>

      <div className="absolute top-14 flex w-64 justify-center">
        <img className=" rounded" src={logo} alt="" />
      </div>

      <div className="mt-12 flex w-full items-center justify-center text-3xl text-gray-700">
        <h2>{name}</h2>
      </div>

      <div className=" mt-12 flex w-full justify-evenly ">
        <img className="h-12 w-12 " src={productPost.img1} alt="product1" />
        <img className=" h-12 w-12  " src={productPost.img2} alt="product1" />
        <img className=" h-12 w-12" src={productPost.img3} alt="product1" />
      </div>
      <div className="mt-8 flex w-full justify-center">
        <div className="text-lg text-gray-600 hover:text-sky-500">
          Ver tienda
        </div>
      </div>
    </div>
  )
}
