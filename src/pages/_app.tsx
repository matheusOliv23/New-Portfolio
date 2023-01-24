import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/global.css"

import "../styles/slider.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="descript"
          content="Projeto inicial simples com Typescript, Reactjs, Nextjs e Styled components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
