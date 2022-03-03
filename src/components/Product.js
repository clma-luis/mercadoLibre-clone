import Image from 'next/image'

import Productnew from '../assets/img/Product1.webp'

export default function Product() {
  return (
    <div className="flex  w-80 flex-col justify-center  bg-inherit select-none">
      <div>
        <img
          className="rounded "
          src="https://http2.mlstatic.com/D_NQ_NP_984595-MPE46789639338_072021-O.webp"
          alt=""
        />
      </div>
      
      <div className="flex items-end justify-start text-black">
        <p className=" text-2xl text-black">S/ 147,90  &nbsp;&nbsp;&nbsp;</p>
        <p className='pb-2 text-xs text-emerald-500' >5% OFF</p>
      </div>
      <div className="text-sm">
        Cojin respaldar ergonómico Lumbar policarbonato modelo
      </div>
    </div>
  )
}
