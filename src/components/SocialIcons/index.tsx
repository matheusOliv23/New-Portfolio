import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const icons = [
  {
    id: 1,
    title: "Instagram",
    name: "ph:instagram-logo",
    href: "https://www.instagram.com/matheus.olli23/"
  },
  {
    id: 2,
    title: "Linkedin",
    name: "mdi:linkedin",
    href: "https://www.linkedin.com/in/matheushenrioliveira/"
  },
  {
    id: 3,
    title: "Github",
    name: "mdi:github",
    href: "https://github.com/matheusOliv23"
  }
]

export default function SocialIcons() {
  return (
    <div className="flex gap-10 mb-2 mt-2">
      {icons.map((icon, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          animate={{ x: 0, rotate: [0, 360] }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 2 + index * 0.3
          }}
          className="flex hover:opacity-50 flex-col items-center justify-center"
          key={icon.name}
        >
          <a href={icon.href} target="_blank" rel="noreferrer">
            <Icon
              aria-label={icon.name}
              width="32"
              height="32"
              icon={icon.name}
            />
          </a>
          <span className="text-xs font-medium">{icon.title}</span>
        </motion.div>
      ))}
    </div>
  )
}
