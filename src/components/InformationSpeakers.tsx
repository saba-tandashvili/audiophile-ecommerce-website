import xx99mone from "../assets/product-zx9-speaker/desktop/image-product.jpg"
import xx99mtwo from "../assets/product-zx7-speaker/desktop/image-product.jpg"

export default function InformationSpeakers() {
  return (
    <div className="information-headphones">
      <div className="headphone">
        <img src={xx99mtwo} alt="" />

        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>ZX9 <br /> SPEAKER</h1>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>

      <div className="headphone reverse">
        <img src={xx99mone} alt="" />

        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>ZX9 <br /> SPEAKER</h1>
          <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  )
}
