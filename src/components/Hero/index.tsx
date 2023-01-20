import Header from "../Header"
import Headline from "../Headline"
import SocialIcons from "../SocialIcons"
import { HeroImgStyles, HeroStyles, ImgContainer } from "./styles"

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('/images/ales-nesetril-opac.png')`,
        backgroundBlendMode: "lighten"
      }}
      className={HeroStyles}
    >
      <Header />
      <div className="lg:flex-row flex-col-reverse flex items-center justify-around">
        <Headline />
        <div className={ImgContainer}>
          <div
            style={{ backgroundImage: "url('/images/eu.webp')" }}
            className={HeroImgStyles}
          />
          <SocialIcons />
        </div>
      </div>
    </section>
  )
}
