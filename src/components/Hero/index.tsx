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
      <Headline />
      <div className={ImgContainer}>
        <div
          style={{ backgroundImage: "url('/images/eu.webp')" }}
          className={HeroImgStyles}
        />

        <SocialIcons />
      </div>
    </section>
  )
}
