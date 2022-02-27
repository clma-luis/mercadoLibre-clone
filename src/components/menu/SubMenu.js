import Link from "next/link"

export default function SubMenu({change}){
  return (
    <div className="relative bottom-8">
        <div className={change  ? 'text-black absolute select-none p-5 -bottom-30  pl-7 flex flex-col left-7 max-h-max w-100 bg-white' : 'hidden'}>
        <div className="mb-5 pl-7 border-b-4">
            <h3 className="text-xl mb-4 mt-4 select-none">Tecnología</h3>
        </div>
        <div className="flex justify-between items-start ml-16 mb-20">
            <ul className="mr-10 w-40">
                <li className="font-bold liStyle2"><Link href="#"><a>Celulares y Teléfonos</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Celulares y Smartphones</a></Link></li>
                <li className="liStyle2 mb-6"><Link href="#"><a>Accesorios para Celulares</a></Link></li>
                <li className="font-bold liStyle2"><Link href="#"><a>Computación</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Laptops</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>iPad y Tablets</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Computadoras y Servidores</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Accesorios para Laptops</a></Link></li>
            </ul>

            <ul className="mr-10 w-40">
                <li className="font-bold liStyle2"><Link href="#"><a>Cámaras y Accesorios</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Accesorios para Cámaras</a></Link></li>
                <li className=" liStyle2 mb-11"><Link href="#"><a>Video Cámaras</a></Link></li>
                <li className="font-bold liStyle2"><Link href="#"><a>Electrónica, Audio y Vídeo</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Accesorios para Audio y Vídeo</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Equipos de DJ y Accesorios</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>Audio</a></Link></li>
                <li className="liStyle2"><Link href="#"><a>TVs</a></Link></li>
            </ul>

            <ul className="mr-10 ">
                <li className="font-bold liStyle2"> <Link href=""><a>Consolas y Videojuegos</a></Link> </li>
                <li className="liStyle2" ><Link href=""><a>Para PlayStation</a></Link></li>
                <li className="liStyle2"><Link href=""><a>Videojuegos</a></Link></li>
            </ul>
        </div>
        </div>
    </div>
  )
}
