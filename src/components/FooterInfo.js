import { useState } from 'react'
import Link from 'next/link'

import { ChevronUpIcon } from '@heroicons/react/outline'
import { animateScroll as scroll } from 'react-scroll'

export default function FooterInfo() {
  const [hoverFooter, setHoverFooter] = useState(false)

  return (
    <div className="pb-20 select-none">
      <div
        className="flex cursor-pointer items-center justify-center text-slate-600  "
        onClick={() => {
          setHoverFooter(!hoverFooter)
        }}
      >
        <p className="mb-8 bg-white lg:mb-0">Más información &nbsp;</p>
        <ChevronUpIcon className="mb-8 w-4 bg-white lg:mb-0" />
      </div>

      <div
        className={
          hoverFooter
            ? 'grid w-full grid-cols-1 justify-center justify-items-center gap-5 px-20 pt-10  pb-20 md:grid-cols-3 lg:grid-cols-5'
            : 'hidden'
        }
      >
        <div>
          <span className="flex flex-col items-center">Acerca de</span>
          <ul className=" flex flex-col items-center text-slate-400">
            <li>
              <Link href="/">
                <a className="mt-4 flex flex-col items-center hover:underline">
                  Mercado Libre
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Investor relations</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Tendencias</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Sustentabilidad</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="flex flex-col items-center">Acerca de</span>
          <span className="flex flex-col items-center">Otros sitios</span>
          <ul className=" flex flex-col items-center text-gray-400">
            <li>
              <Link href="/">
                <a className="hover:underline">Developers</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Mercado Pago</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Mercado Ads</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="flex flex-col items-center">Ayuda</span>
          <ul className=" flex flex-col items-center text-gray-400">
            <li>
              <Link href="/">
                <a className="hover:underline">Comprar</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Vender</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Resoluión de problemas</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Centro de seguridad</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="flex flex-col items-center">Redes sociales</span>
          <ul className=" flex flex-col items-center text-gray-400">
            <li>
              <Link href="/">
                <a className="hover:underline">Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Youtube</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="flex flex-col items-center">Mi cuenta</span>
          <ul className=" flex flex-col items-center text-gray-400">
            <li>
              <Link href="/">
                <a className="hover:underline">Ingresa</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Vender</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
