import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

type SkillType = {
  title: string
  icon: JSX.Element
}

interface SkillsProps {
  skills: SkillType[]
}

export default function Skiils({ skills }: SkillsProps) {
  const { t } = useTranslation()
  return (
    <section
      id="skills"
      className="flex w-full bg-gray-light flex-col items-center font-openSans gap-10 md:px-7 py-6 md:py-20 lg:py-32 m-auto lg:justify-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h2 className="text-[40px] text-center md:mb-10">{t("menu.skills")}</h2>
      </motion.div>

      <div className="md:flex grid md:mb-0 mb-6 grid-cols-2 justify-center gap-2 h-full md:gap-0 w-4/5 flex-wrap">
        {skills.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            key={index}
            className="flex flex-col p-10 justify-between"
          >
            <span className="text-primary text-center font-light pb-2">
              {item.title}
            </span>
            <span className="md:w-24 h-8 w-8 md:h-24">{item.icon}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
