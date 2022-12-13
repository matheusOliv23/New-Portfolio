import Headline from "../Headline"
import SocialIcons from "../SocialIcons"

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('/images/ales-nesetril-opac.png')`,
        backgroundBlendMode: "lighten"
      }}
      className="h-[90vh] transition-all duration-300 lg:flex-row flex-col-reverse flex items-center justify-around px-7 py-3 bg-no-repeat bg-fixed bg-cover bg-center"
    >
      <Headline />
      <div className="flex flex-col items-center gap-5">
        <div
          style={{ backgroundImage: "url('/images/eu.webp')" }}
          className="w-[15.5rem] md:w-[22rem] md:h-[22rem] flex items-center justify-center bg-cover bg-center pr-[0.5rem] bg-no-repeat ring-[5px] ring-inset ring-teal-500 rounded-[50%] h-[15.5rem]"
        />

        <SocialIcons />
      </div>
    </section>
  )
}
