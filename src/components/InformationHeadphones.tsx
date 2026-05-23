import { useNavigate } from "react-router-dom"
import xx99mone from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
import xx99mtwo from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
import xx59 from "../assets/product-xx59-headphones/desktop/image-product.jpg"

export default function InformationHeadphones() {
  const navigate = useNavigate()
  return (
    <div className="information-headphones">
      <div className="headphone">
        <img src={xx99mtwo} alt="" />

        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>XX99 MARK II <br /> HEADPHONES</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button onClick={() => {navigate("/xx99-mark-two-headphones")}}>SEE PRODUCT</button>
        </div>
      </div>

      <div className="headphone reverse">
        <img src={xx99mone} alt="" />

        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>XX99 MARK I <br /> HEADPHONES</h1>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>

      <div className="headphone">
        <img src={xx59} alt="" />

        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>XX59 <br /> HEADPHONES</h1>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  )
}
