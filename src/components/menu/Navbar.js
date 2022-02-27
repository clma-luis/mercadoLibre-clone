import Image from 'next/image'
import Logo from '../../assets/img/mercado-libre-logo.svg'
import {
  SearchIcon,
  DeviceMobileIcon,
  MenuIcon,
} from '@heroicons/react/outline'

export default function Navbar() {
  return (
    <div className="flex w-full flex-wrap items-center select-none justify-between bg-yellow-300 p-4 lg:px-10 text-slate-600">
      <Image className="cursor-pointer" src={Logo} height={44} width={154} alt="Logo" />

      <div className="hidden sm:flex justify-center w-8/12  lg:w-5/12 xl:w-6/12 mx-auto h-10 text-inherit ">
        <input
          className="w-full p-3 focus:outline-none  "
          type="text"
          placeholder="Buscar productos, marcas y mas..."
        />
        <SearchIcon className="w-8 pr-2 bg-white cursor-pointer" />
      </div>
      <div className=" hidden lg:flex justify-center items-center w2/12 lg:w-4/12 cursor-pointer">
        <DeviceMobileIcon className="w-8 mr-2 hidden md:block" />
        <div className=' hidden md:block text-base'>Descarga gratis la App de Mercado Libre</div>
      </div>
      <MenuIcon className="w-7  lg:hidden" />
    </div>
  )
}
