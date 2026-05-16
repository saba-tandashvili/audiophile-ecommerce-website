import Logo from "../assets/shared/desktop/logo.svg"
import Cart from "../assets/shared/desktop/icon-cart.svg"
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <img src={Logo} alt="" onClick={() => {navigate("/")}}/>

      <div className="middle">
        <Link to="/">HOME</Link>
        <Link to="/headphones">HEADPHONES</Link>
        <Link to="/speakers">SPEAKERS</Link>
        <Link to="/earphones">EARPHONES</Link>
      </div>

      <img src={Cart} alt="Cart" />

    </header>
  )
}
