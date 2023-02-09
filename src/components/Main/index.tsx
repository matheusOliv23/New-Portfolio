import About from "../About"
import Footer from "../Footer"
import Hero from "../Hero"
import Projects from "../Projects"
import Skiils from "../Skiils"
import { skills } from "../Skiils/skillsMock"

export default function Main() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skiils skills={skills} />
      <Footer />
    </>
  )
}
