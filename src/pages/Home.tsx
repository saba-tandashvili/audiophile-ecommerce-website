import "./style.css";
import Header from "../components/Header";
import NewProduct from "../components/NewProduct";
import Background from "../assets/home/desktop/image-hero.jpg";
import Center from "../components/Center";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="header">
        <Header />
        <img src={Background} alt="" className="background" />
        <NewProduct />
      </div>

      <Center />
      <Footer />
    </div>
  );
}
