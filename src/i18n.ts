import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslations from "./locales/en.json"
import ptTranslations from "./locales/pt.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      pt: {
        translation: ptTranslations
      }
    },
    fallbackLng: "pt",
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    console.log("i18n initialized successfully")
    console.log("Current language:", i18n.language)
  })
  .catch((error) => {
    console.error("Failed to initialize i18n:", error)
  })

export default i18n
