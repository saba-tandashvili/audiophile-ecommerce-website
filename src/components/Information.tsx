import Pattern from "../assets/home/desktop/pattern-circles.svg";
import BigSpeaker1 from "../assets/home/desktop/image-speaker-zx9.png";
import BigSpeaker2 from "../assets/home/desktop/image-speaker-zx7.jpg";
import BigEarphones from "../assets/home/desktop/image-earphones-yx1.jpg";

export default function Information() {
  return (
    <div className="information">
      <div className="zx9">
        <div className="left">
            <img src={BigSpeaker1} alt="" className="speaker"/>
            <img src={Pattern} alt="" className="pattern"/>
        </div>
        <div className="right">
            <h1>ZX9 <br /> SPEAKER</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button>SEE PRODUCT</button>
        </div>
      </div>

      <div className="zx7">
        <img src={BigSpeaker2} alt="" className="background" />

        <div>
            <h1>ZX7 SPEAKER</h1>
            <button>SEE PRODUCT</button>
        </div>
      </div>

      <div className="yx1">
        <img src={BigEarphones} alt="" />
        <div>
            <h1>YX1 EARPHONES</h1>
            <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  )
}
