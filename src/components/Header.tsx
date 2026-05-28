import Logo from "../assets/shared/desktop/logo.svg"
import Cart from "../assets/shared/desktop/icon-cart.svg"
import { Link, useNavigate } from "react-router-dom"
type HeaderProps = {
    setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({setShowCart}: HeaderProps) {
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

      <img src={Cart} alt="Cart" onClick={() => {setShowCart?.((prev) => !prev)}}/>

    </header>
  )
}
