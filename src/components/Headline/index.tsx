import { motion } from "framer-motion"
import Button from "../Button"
import {
  ButtonContainerStyls,
  HeadlineContainer,
  SubtitleStyles,
  TextStyles,
  TitleStyles
} from "./styles"
import { useTranslation } from "react-i18next"

export default function Headline() {
  const { t } = useTranslation()

  function scrollDown() {
    window.scrollTo({ top: 300, behavior: "smooth" })
  }

  return (
    <div className={HeadlineContainer}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1 className={TitleStyles}>MATHEUS HENRIQUE OLIVEIRA</h1>
      </motion.div>

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
        <h2 className={SubtitleStyles}>
          {t("hero.dev")}{" "}
          <strong className="text-primary">{t("hero.front")}</strong>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h3 className={TextStyles}>{t("hero.text")}</h3>
      </motion.div>

      <div className={ButtonContainerStyls}>
        <Button onClick={scrollDown} type="button" variant="PRIMARY">
          {t("hero.who")}
        </Button>
      </div>
    </div>
  )
}
