import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo.svg";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <img src={Logo} alt="" />
        <div className="other-pages">
          <Link to={"/"}>HOME</Link>
          <Link to={"/headphones"}>HEADPHONES</Link>
          <Link to={"/speakers"}>SPEAKERS</Link>
          <Link to={"/earphones"}>EARPHONES</Link>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src={Facebook} alt="" onClick={() => {window.location.href = "https://facebook.com"}}/>
          <img src={Twitter} alt="" onClick={() => {window.location.href = "https://twitter.com"}}/>
          <img src={Instagram} alt="" onClick={() => {window.location.href = "https://instagram.com"}}/>
        </div>
      </div>
    </footer>
  );
}
