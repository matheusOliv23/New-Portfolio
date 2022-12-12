import { Icon } from "@iconify/react"
import Headline from "../Headline"

const icons = [
  {
    id: 1,
    name: "ph:instagram-logo",
    href: "https://www.instagram.com/matheus.olli23/"
  },
  {
    id: 2,
    name: "mdi:linkedin",
    href: "https://www.linkedin.com/in/matheushenrioliveira/"
  },
  {
    id: 3,
    name: "mdi:github",
    href: "https://github.com/matheusOliv23"
  }
]
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

        <div className="flex gap-3 mt-2">
          {icons.map((icon) => (
            <a
              href={icon.href}
              key={icon.id}
              className="hover:opacity-50"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                aria-label={icon.name}
                width="32"
                height="32"
                icon={icon.name}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
