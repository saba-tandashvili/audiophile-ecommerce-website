import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Data from "../data.json";
import Header from "../components/Header";
import OtherPages from "../components/OtherPages";
import Footer from "../components/Footer";
import Description from "../components/Description";

export default function Mark2() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  function Minus() {
    if (amount <= 1) {
      return;
    } else {
      setAmount((prev) => prev - 1);
    }
  }
  return (
    <div className="mark2">
      <div className="header">
        <Header />
      </div>

      <h4
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </h4>

      <div className="product">
        <img src={Data[3].image.desktop} alt="" />

        <div className="info-product">
          <span>NEW PRODUCT</span>
          <h1>
            XX99 Mark II <br /> Headphones
          </h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <h3>{`$ ${Data[3].price * amount}`}</h3>
          <div className="buttons">
            <div className="amount">
              <button
                onClick={() => {
                  Minus();
                }}
              >
                -
              </button>
              <p>{amount}</p>
              <button
                onClick={() => {
                  setAmount((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <button className="cart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="left">
          <h1>FEATURES</h1>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className="right">
          <h1>IN THE BOX</h1>

          {Data[3].includes.map((item) => (
            <div>
              <span>{item.quantity}x</span>
              <p>{item.item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="images">
        <div className="left">
          <img src={Data[3].gallery.first.desktop} alt="" />
          <img src={Data[3].gallery.second.desktop} alt="" />
        </div>
        <div className="right">
          <img src={Data[3].gallery.third.desktop} alt="" />
        </div>
      </div>

      <div className="recommended">
        <h1>YOU MAY ALSO LIKE</h1>

        <div className="other-products">
        {Data[3].others.map((product) => (
            <div className="other-product">
              <img src={product.image.desktop} alt="" />
              <h1>{product.name}</h1>
              <button onClick={() => {navigate(`/${product.slug}`)}}>SEE PRODUCT</button>
          </div>
        ))}
        </div>
      </div>

      <OtherPages />
      <Description />
      <Footer />
    </div>
  );
}
