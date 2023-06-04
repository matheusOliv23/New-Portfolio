import Headline from "../Headline"
import LanguageSelector from "../LanguageSelector"
import SocialIcons from "../SocialIcons"
import { HeroImgStyles, HeroStyles, ImgContainer } from "./styles"

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('/images/ales-nesetril-opac.png')`,
        backgroundBlendMode: "lighten"
      }}
      id="home"
      className={HeroStyles}
    >
      <div className="lg:flex-row mt-[5%] flex-col-reverse flex items-center justify-around">
        <Headline />

        <LanguageSelector classNames="absolute top-2" />
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
