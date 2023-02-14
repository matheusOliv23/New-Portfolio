import About from "../About"
import Footer from "../Footer"
import Header from "../Header"
import Hero from "../Hero"
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
      <Whatsapp />
    </>
  )
}
