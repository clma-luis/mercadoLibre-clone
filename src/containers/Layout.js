import Head from 'next/head'

import Navbar from '../components/menu/Navbar'
import SubNavbar from '../components/menu/SubNavbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head>
        <title>Mercado libre</title>
      </Head>
      <Navbar />
      <SubNavbar />
      {children}
      <Footer/>
    </div>
  )
}
