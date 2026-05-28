import { useNavigate } from "react-router-dom";
import ArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function OtherPages() {
  const navigate = useNavigate()
  return (
    <div className="other-pages">
        <div className="other" onClick={() => {navigate("/headphones")}}>
          <img src={Headphones} alt="" className="picture1" />
          <h3>Headphones</h3>
          <div className="shop" >
            <p>SHOP </p>
            <img src={ArrowRight} alt="" />
          </div>
        </div>
        <div className="other" onClick={() => {navigate("/speakers")}}>
          <img src={Speakers} alt="" className="picture2" />
          <h3>Speakers</h3>
          <div className="shop" >
            <p>SHOP </p>
            <img src={ArrowRight} alt="" />
          </div>
        </div>
        <div className="other" onClick={() => {navigate("/earphones")}}>
          <img src={Earphones} alt="" className="picture3" />
          <h3>Earphones</h3>
          <div className="shop" >
            <p>SHOP </p>
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
  )
}
