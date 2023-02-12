import { motion } from "framer-motion"
import Button from "../Button"
import {
  ButtonContainerStyls,
  HeadlineContainer,
  SubtitleStyles,
  TextStyles,
  TitleStyles
} from "./styles"

export default function Headline() {
  function scrollDown() {
    window.scrollTo({ top: 300, behavior: "smooth" })
  }

  return (
    <div className={HeadlineContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1 className={TitleStyles}>MATHEUS HENRIQUE OLIVEIRA</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h2 className={SubtitleStyles}>
          Desenvolvedor <strong className="text-primary">Front-End</strong>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h3 className={TextStyles}>
          Transformando sonhos em realidade por meio da tecnologia
        </h3>
      </motion.div>

      <div className={ButtonContainerStyls}>
        <Button onClick={scrollDown} type="button" variant="PRIMARY">
          Quem sou eu
        </Button>
      </div>
    </div>
  )
}
