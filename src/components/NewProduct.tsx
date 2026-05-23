import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const navigate = useNavigate()
  return (
    <div className="new-product">
      <span>NEW PRODUCT</span>
      <h1>XX99 Mark II Headphones</h1>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <button onClick={() => {navigate("/xx99-mark-two-headphones")}}>SEE PRODUCT</button>
    </div>
  );
}
