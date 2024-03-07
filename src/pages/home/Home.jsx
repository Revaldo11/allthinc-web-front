import Banner from "./Banner"
import PopularCreators from "./creatorPopuler/PopularCreators"
import Promo from "./Promo/Promo"
import Footer from "../../layouts/Footer"
import Product from "./Product/Product"

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCreators />
      <Promo />
      <Product />
      <Footer />
    </div>
  )
}

export default Home