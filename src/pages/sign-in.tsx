import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/img/mercado-libre-logo.svg'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'

export default function SignIn() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex flex-col items-center justify-start">
        <div className="mb-16 flex  h-40 w-full items-start justify-between bg-yellow-300 px-10 pt-6 lg:h-80">
          <Link href={'/'}>
            <a className="" href="">
              <Image src={Logo} width={154} height={44}></Image>
            </a>
          </Link>
        </div>

        <div className="absolute top-[100px] flex w-[20rem] flex-col justify-start rounded-md border-[1px] border-gray-300 bg-white p-5 lg:top-40 lg:h-[30rem] lg:w-[32rem]">
          <h1 className=" mb-8 text-[1.5rem] lg:pb-3 lg:text-[3.5rem]">
            ¡Hola! Ingresa tu e-mail
          </h1>

          <form action="" className="flex flex-col text-sm lg:pl-[4rem]">
            <span className="mb-1">Correo</span>
            <input
              className="mb-3 h-8 rounded border-[1px] border-gray-400 focus:outline-none lg:w-[20rem]"
              type="text"
            />

            <span className="mb-1">Contraseña</span>
            <input
              className="mb-6 h-8 rounded border-[1px] border-gray-400 focus:outline-none lg:w-[20rem]"
              type="text"
            />

            <button className=" h-8 rounded border-[1px] border-orange-200 bg-yellow-300 hover:bg-yellow-400 lg:w-[20rem] ">
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
