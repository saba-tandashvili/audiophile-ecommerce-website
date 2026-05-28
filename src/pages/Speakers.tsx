import Header from "../components/Header"
import InformationSpeakers from "../components/InformationSpeakers"
import OtherPages from "../components/OtherPages"
import Description from "../components/Description"
import Footer from "../components/Footer"
import CartDiv from "../components/CartDiv"
import { useState } from "react"

export default function Speakers() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="headphones-page">
      <div className="header-headphones">
        <Header setShowCart={setShowCart}/>
        <h1>SPEAKERS</h1>
      </div>

      <CartDiv showCart={showCart} setShowCart={setShowCart} />

      <InformationSpeakers />
      <OtherPages />
      <Description />
      <Footer />
    </div>
  )
}
