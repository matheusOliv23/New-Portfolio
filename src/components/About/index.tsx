import React from "react"
import { motion } from "framer-motion"
import ScrollSpy from "react-ui-scrollspy"

export default function About() {
  return (
    <ScrollSpy>
      <section
        id="about"
        data-to-scrollspy-id="about"
        className="flex w-full lg:flex-row flex-col font-openSans gap-10 max-w-7xl px-7 py-6 md:py-20 lg:py-32 m-auto xl:justify-between lg:justify-center"
      >
        <div className="space-y-4">
          <h2 className="text-2xl text-primary">Sobre mim</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className="lg:max-w-xl text-xl text-justify"
          >
            Tenho como objetivo principal me tornar destaque no desenvolvimento
            web, principalmente na parte de Front-End. Sou uma pessoa muito
            dedicada, educada, responsável e gosto muito de novos desafios.
          </motion.div>
        </div>

        <div className="flex items-center justify-center flex-col w-full lg:max-w-sm space-y-4">
          <div className="flex w-full justify-between md:gap-16 md:justify-start lg:justify-between items-center">
            <div className="flex items-center gap-2">
              <p className="text-6xl font-semibold text-primary">1.5</p>
              <p className="text-sm">
                anos <br /> de experiência
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-6xl font-semibold text-primary">6</p>
              <p className="text-sm">
                projetos <br /> concluídos
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className="text-justify"
          >
            Experiência em desenvolvimento de aplicações web responsivas e
            escaláveis utilizando Javascript, Typescript e Reactjs.
          </motion.div>
        </div>
      </section>
    </ScrollSpy>
  )
}
