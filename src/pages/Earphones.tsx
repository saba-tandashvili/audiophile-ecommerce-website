import Header from "../components/Header"
import InformationEarphones from "../components/InformationEarphones"
import OtherPages from "../components/OtherPages"
import Description from "../components/Description"
import Footer from "../components/Footer"

export default function Speakers() {
  return (
    <div className="headphones-page">
      <div className="header-headphones">
        <Header />
        <h1>EARPHONES</h1>
      </div>

      <InformationEarphones />
      <OtherPages />
      <Description />
      <Footer />
    </div>
  )
}
