import xx99mtwo from "../assets/product-yx1-earphones/desktop/image-product.jpg"

export default function InformationEarphones() {
  return (
    <div className="information-headphones">
      <div className="headphone">
        <img src={xx99mtwo} alt="" />

        <div className="right">
          <span>NEW PRODUCT</span>
          <h1>YX1 WIRELESS <br /> EARPHONES</h1>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  )
}
