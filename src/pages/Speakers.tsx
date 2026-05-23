import Header from "../components/Header"
import InformationSpeakers from "../components/InformationSpeakers"
import OtherPages from "../components/OtherPages"
import Description from "../components/Description"
import Footer from "../components/Footer"

export default function Speakers() {
  return (
    <div className="headphones-page">
      <div className="header-headphones">
        <Header />
        <h1>SPEAKERS</h1>
      </div>

      <InformationSpeakers />
      <OtherPages />
      <Description />
      <Footer />
    </div>
  )
}
