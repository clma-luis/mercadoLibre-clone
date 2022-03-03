import Image from 'next/image'
import Link from 'next/link'

import Payment from '../assets/img/payment.svg'
import Shipping from '../assets/img/shipping.svg'
import Protected from '../assets/img/protected.svg'


export default function Footer() {
  return (
    <div className='p-5 pb-5'>
      <div className='select-none grid md:grid-cols-2 lg:grid-cols-3 text-sm justify-center items-center'>
        <div className='footer'>
          <Image src={Payment} width={50}/>
          <h3 className='text-2xl'>Paga con Mercado Pago</h3>
          <p>Usa Mercado Pago, la solución de Mercado Libre para pagar de forma segura y con el medio de pago que prefieras.</p>
          <Link href="/"><a className='text-cyan-600'>Cómo pagar con Mercado Pago</a></Link>
        </div>
        <div className='footer'>
          <Image src={Shipping} width={50}/>
          <h3 className='text-2xl'>Envío gratis desde S/ 79</h3>
          <p>Elige Mercado Envíos en tus compras y disfruta de envíos gratis en miles de productos nuevos.</p>
          <Link href="/"><a className='text-cyan-600'>Cómo recibir compras con Mercado Envíos</a></Link>
        </div>
        <div className='footer'>
          <Image src={Protected} width={50}/>
          <h3 className='text-2xl'>Compra Protegida</h3>
          <p>Paga con Mercado Pago y te acompañamos hasta que recibas lo que compraste. Y si no es lo que esperabas, te devolvemos el dinero.</p>
          <Link href="/"><a className='text-cyan-600'>Cómo te protegemos</a></Link>
        </div>
      </div>
    </div>
  )
}
