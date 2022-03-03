import type { NextPage } from 'next'

import Layout from '../containers/Layout'
import Slider from '../components/Slider'
import ProducsHome from '../components/ProductsHome'
import BannerProduct from '../components/BannerProduct'
import BestStores from '../components/bestStores/BestStores'
import InfoMeli from '../components/InfoMeli'
import FooterInfo from '../components/FooterInfo'

const Home: NextPage = () => {
  /*   var windowWidth = window.innerWidth
  console.log(windowWidth) */
  return (
    <div className="">
      <Layout>
        <Slider />
        <div className="m-10">
          <ProducsHome title="Ofertas" />
        </div>

        <div>
          <BannerProduct />
        </div>

        <div className="m-10">
          <ProducsHome title="Productos mas vendidos" />
        </div>

        <div className="m-10">
          <BestStores />
        </div>

        <InfoMeli />
        <FooterInfo />
      </Layout>
    </div>
  )
}

export default Home
