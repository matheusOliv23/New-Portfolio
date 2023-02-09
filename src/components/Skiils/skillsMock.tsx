import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import {
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"

export const skills = [
  {
    title: "JavaScript",
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
    title: "React",
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
