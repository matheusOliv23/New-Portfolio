import About from "../About"
import Footer from "../Footer"
import Header from "../Header"
import Hero from "../Hero"
import LanguageSelector from "../LanguageSelector"
import Projects from "../Projects"
import Skiils from "../Skiils"
import { skills } from "../Skiils/skillsMock"
import Whatsapp from "../Whatsapp"

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skiils skills={skills} />
      <Footer />
      <LanguageSelector classNames="fixed z-50 bottom-20 md:hidden left-2" />
      <Whatsapp />
    </>
  )
}
