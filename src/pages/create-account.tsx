import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/img/mercado-libre-logo.svg'

export default function createCount() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center justify-start">
        <div className="mb-16 flex h-20 w-full items-center justify-between bg-yellow-300 px-10">
          <Link href={'/'}>
            <a className="" href="">
              <Image src={Logo} width={154} height={44}></Image>
            </a>
          </Link>

          <Link href="/sign-in">
            <a className="text-lg text-slate-600 hover:text-slate-800">
              Ingresa
            </a>
          </Link>
        </div>

        <div className="items- flex h-[30rem] w-[20rem] flex-col justify-start rounded-md border-[1px] border-gray-400 p-5">
          <h1 className="pb-3 text-2xl">Crea una cuenta</h1>

          <form action="" className="flex flex-col text-sm">
            <span className="mb-1">Nombre y Apellido</span>
            <input
              className="mb-3 h-8 w-[17rem] rounded border-[1px] border-gray-400 focus:outline-none"
              type="text"
            />

            <span className="mb-1">Correo</span>
            <input
              className="mb-3 h-8 w-[17rem] rounded border-[1px] border-gray-400 focus:outline-none"
              type="text"
            />

            <span className="mb-1">Contraseña</span>
            <input
              className="mb-3 h-8 w-[17rem] rounded border-[1px] border-gray-400 focus:outline-none"
              type="text"
            />

            <span className="mb-1">Repita su contraseña</span>
            <input
              className="mb-7 h-8 w-[17rem] rounded border-[1px] border-gray-400 focus:outline-none "
              type="text"
            />

            <div className="mb-7 flex items-start justify-start">
              <input className="mt-[2.5px] mr-2" type="checkbox" />
              <span className="text-[10px]">
                Acepto los Términos y Condiciones y autorizo el uso de mis datos
                de acuerdo a la Declaración de Privacidad.
              </span>
            </div>

            <button className=" h-8 w-full rounded border-[1px] border-orange-200 bg-yellow-300 hover:bg-yellow-400 ">
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
