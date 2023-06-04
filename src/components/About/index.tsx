import React from "react"
import { motion } from "framer-motion"
import tech from "src/lotties/tech.json"
import Lottie from "react-lottie"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()
  const about = [
    t("about.skills"),
    t("about.proficient"),
    t("about.proactive"),
    t("about.always")
  ]

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: tech,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <section
      id="about"
      className="flex w-full flex-col bg-gray-light font-openSans gap-10 px-7 py-6 md:py-20 lg:py-32 m-auto"
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
        <h2 className="text-[40px] text-center">Sobre Mim</h2>
      </motion.div>
      <div className="lg:flex-row lg:gap-6 items-center flex m-auto flex-col max-w-7xl xl:justify-between lg:justify-between">
        <div className="space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className="lg:max-w-xl text-xl text-justify"
          ></motion.div>
          <ul className="!list-disc space-y-4 md:pl-6">
            {about.map((item, index) => (
              <li key={index} className="list-disc">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                  }}
                  className="lg:max-w-xl text-justify"
                >
                  {item}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </section>
  )
}
