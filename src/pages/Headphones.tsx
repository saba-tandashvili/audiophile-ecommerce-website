import Header from "../components/Header"
import InformationHeadphones from "../components/InformationHeadphones"
import OtherPages from "../components/OtherPages"
import Description from "../components/Description"
import Footer from "../components/Footer"
import CartDiv from "../components/CartDiv"
import { useState } from "react"

export default function Headphones() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="headphones-page">
      <div className="header-headphones">
        <Header setShowCart={setShowCart} />
        <h1>HEADPHONES</h1>
      </div>

      <CartDiv showCart={showCart} setShowCart={setShowCart}/>
      
      <InformationHeadphones />
      <OtherPages />
      <Description />
      <Footer />
    </div>
  )
}
