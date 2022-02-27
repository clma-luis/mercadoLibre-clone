

import Link from 'next/link'

export default function Footer() {

  return (
    <div className='absolute bottom-0 w-full'>
      <div className=''>
        
        <div className='flex flex-col text-xs w-full pb-5 px-8 text-gray-500'>
            <div>
                <Link href="#"><a className='mr-4'>Trabaja con nosotros</a></Link>
                <Link href="#"><a className='mr-4'>Términos y condiciones</a></Link>
                <Link href="#"><a className='mr-4'>Cómo cuidamos tu privacidad</a></Link>
                <Link href="#"><a className='mr-4'>Ayuda</a></Link>
            </div>
            <div className='text-gray-400'>
                <p>Copyright © 1999-2022 MercadoLibre Perú S.R.L.</p>
                <p>German Schreiber Gulsmanco Nº276, San Isidro, Lima, Perú.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
