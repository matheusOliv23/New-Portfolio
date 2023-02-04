import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiStyledcomponents,
  SiJest,
  SiTailwindcss
} from "react-icons/si"

const skills = [
  {
    title: "Javascript",
    icon: <IoLogoJavascript className="skill" />
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="skill" />
  },
  {
    title: "Nextjs",
    icon: <SiNextdotjs className="skill" />
  },
  {
    title: "Reactjs",
    icon: <FaReact className="skill" />
  },
  {
    title: "Nodejs",
    icon: <SiNodedotjs className="skill" />
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents className="skill" />
  },
  {
    title: "Tailwindcss",
    icon: <SiTailwindcss className="skill" />
  },
  {
    title: "Jest",
    icon: <SiJest className="skill" />
  }
]

export default function Skiils() {
  return (
    <div className="flex w-full flex-col items-center font-openSans gap-10 md:px-7 py-6 md:py-20 lg:py-32 m-auto lg:justify-center">
      <h2 className="text-[40px] text-center mb-10">Habilidades</h2>

      <div className="flex justify-between w-4/5 flex-wrap">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-primary text-center font-light pb-2">
              {item.title}
            </span>
            <span className="w-24 h-24">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
