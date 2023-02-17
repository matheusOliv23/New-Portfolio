import ProjectCard from "../ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

const projects = [
  {
    id: "1",
    title: "FadeApp",
    href: "https://fadeapp.vercel.app/",
    img: "/images/fadeapp.png"
  },
  {
    id: "2",
    title: "Unimodas",
    href: "https://unimodas7l.vercel.app/",
    img: "/images/unimodas.png"
  }
]

const breakpoints = {
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 5,
    slidesPerGroup: 50
  },
  640: {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 30
  },
  350: {
    slidesPerView: 1.2,
    slidesPerGroup: 1.3,
    spaceBetween: 60
  }
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex w-full font-openSans gap-10 md:px-7 py-6 md:py-20 lg:py-32 m-auto xl:justify-between lg:justify-center bg-black"
    >
      <div className="m-auto w-full max-w-7xl">
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
          <h2 className="text-[40px] text-center mb-10">Projetos</h2>
        </motion.div>

        <Swiper
          speed={900}
          slidesPerView={3}
          className="ease flex items-center w-full justify-center m-auto h-full transition duration-200 cardsSwiper"
          navigation={true}
          loop={false}
          breakpoints={breakpoints}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <ProjectCard img={item.img} title={item.title} href={item.href} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
