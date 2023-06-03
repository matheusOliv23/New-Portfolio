import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/global.css"

import { appWithTranslation } from "next-i18next"
import { I18nextProvider } from "react-i18next"
import enTranslations from "../locales/en.json"
import ptTranslations from "../locales/pt.json"

import "../styles/slider.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useEffect } from "react"

import i18n from "src/i18n"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    i18n?.init({
      resources: {
        en: {
          translation: enTranslations
        },
        pt: {
          translation: ptTranslations
        }
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    })
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>Matheus Oliveira</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="descript"
          content="Projeto inicial simples com Typescript, Reactjs, Nextjs e Styled components"
        />
      </Head>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default appWithTranslation(MyApp)
