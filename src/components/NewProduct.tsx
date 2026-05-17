import Data from "../data.json";

export default function NewProduct() {
  return (
    <div className="new-product">
      <span>NEW PRODUCT</span>
      <h1>{Data[3].name}</h1>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <button>SEE PRODUCT</button>
    </div>
  );
}
