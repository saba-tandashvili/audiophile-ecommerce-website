import { useState } from "react";
import "./style.css";
import Header from "../components/Header";
import NewProduct from "../components/NewProduct";
import Background from "../assets/home/desktop/image-hero.jpg";
import CartDiv from "../components/CartDiv";
import Center from "../components/Center";
import Footer from "../components/Footer";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <div className="header">
        <Header setShowCart={setShowCart} />
        <img src={Background} alt="" className="background" />
        <NewProduct />
      </div>

      <CartDiv showCart={showCart} setShowCart={setShowCart}/>

      <Center />
      <Footer />
    </div>
  );
}
