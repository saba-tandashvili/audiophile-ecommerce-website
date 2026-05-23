import Header from "../components/Header"
import InformationHeadphones from "../components/InformationHeadphones"
import OtherPages from "../components/OtherPages"
import Description from "../components/Description"
import Footer from "../components/Footer"

export default function Headphones() {
  return (
    <div className="headphones-page">
      <div className="header-headphones">
        <Header />
        <h1>HEADPHONES</h1>
      </div>

      <InformationHeadphones />
      <OtherPages />
      <Description />
      <Footer />
    </div>
  )
}
