import  { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { LocationMarkerIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline'

import SubMenu from './SubMenu'
import Polygon from '../../assets/img/Polygon.svg'


export default function SubNavbar() {
    const [hover, setHover] = useState(false);
    const [subcategoryMenu, setSubcategoryMenu] = useState(false);
    
  return (
    <div className=" relative select-none flex w-full flex-wrap items-center justify-between bg-yellow-300 p-1 text-slate-600 lg:px-10 text-sm">
      <div className="flex cursor-pointer pb-2">
        <LocationMarkerIcon className="w-6" />
        <div className="flex items-center md:flex-col md:items-start">
          <span className='text-xs'>Enviar a &nbsp;</span>
          <span>Lima Metropolitana</span>
        </div>
      </div>
      
      <ul className=" lg:visible flex justify-start">
            <li onClick={() => {
                setHover(!hover);
              }}
              onMouseLeave={() => {
                setHover(false);
              }} className='hidden lg:block relative mr-4 pb-2'><Link href="#"><a className='flex items-center'>     
                Categorías 
                <ChevronDownIcon className='w-3 ml-1'/>
                </a>
                </Link>  
                <ul className={hover ? 'absolute top-3  -right-1 z-10' : 'hidden'}><Image  src={Polygon} height={0} width={20} alt="arrow"/></ul>
                <ul className={ hover  ? 'absolute z-50 top-3 -right-20 mt-3 flex flex-col justify-center border-none py-4   bg-neutral-800 w-72 h-100  text-white rounded-md' : 'hidden' } >
                    <li onMouseEnter={() => {
                setSubcategoryMenu(!subcategoryMenu);
              }} 
                  onMouseLeave={() => {
                setSubcategoryMenu(false);
              }} 
               className='liStyle'><Link href="#"><a className="flex justify-between ">Tecnología
                        <ChevronRightIcon className="w-4 ml-40"/></a></Link>
                        <ul>
                          <li>
                          <SubMenu   change={subcategoryMenu}  />
                          </li>
                        </ul>
                        </li>
                    <li className='liStyle'><Link href="/"><a>Electrodomésticos</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Hogar y Muebles</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Deportes y Fitness</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Bellez y Cuidado personal</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Herramientas</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Construcción</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Industrias y Oficinas</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Juegos y Juguetes</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Bebés</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Accesorios para Vehículos</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Moda</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Salud y Equipamiento Médico</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Vehículos</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Inmuebles</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Tiendas Oficiales</a></Link></li>
                    <li className='liStyle'><Link href="/"><a>Ver más categorías</a></Link></li>
                </ul>
            </li>
            <li className='hidden lg:block mr-4'><Link href="/"><a>Ofertas</a></Link></li>
            <li className='hidden lg:block mr-4'><Link href="/"><a>Historial</a></Link></li>
            <li className='hidden lg:block mr-4'><Link href="/"><a>Tiendas oficiales</a></Link> </li>
            <li className='hidden lg:block mr-4'><Link href="/"><a>Vender</a></Link></li>
            <li className=' hidden lg:block mr-4'><Link href="/"><a>Ayudar</a></Link></li>
        
      </ul>

      <ul className=" pb-2 flex cursor-pointer">
        <li className='hidden lg:block mr-4'>Crear tu cuenta</li>
        <li className='hidden lg:block mr-4'>Ingresa</li>
        <li className='hidden lg:block mr-4'>Mis compras</li>
      </ul>
      <div className={hover || subcategoryMenu ? 'absolute right-0 top-12  w-screen h-screen  bg-black opacity-25 text-white z-10' : 'hidden'}></div>
      <div className="relative">
      
      </div>
    </div>
  )
}
