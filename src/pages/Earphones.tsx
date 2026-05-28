import Header from "../components/Header";
import InformationEarphones from "../components/InformationEarphones";
import OtherPages from "../components/OtherPages";
import Description from "../components/Description";
import Footer from "../components/Footer";
import CartDiv from "../components/CartDiv";
import { useState } from "react";

export default function Speakers() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="headphones-page">
      <div className="header-headphones">
        <Header setShowCart={setShowCart}/>
        <h1>EARPHONES</h1>
      </div>

      <CartDiv showCart={showCart} setShowCart={setShowCart}/>

      <InformationEarphones />
      <OtherPages />
      <Description />
      <Footer />
    </div>
  );
}
