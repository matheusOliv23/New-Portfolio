import ProjectCard from "../ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import { Navigation } from "swiper"
import { useTranslation } from "react-i18next"

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
  },
  {
    id: "3",
    title: "TISolutions",
    href: "https://transcendent-croissant-98649e.netlify.app/",
    img: "/images/solutions.png"
  },
  {
    id: "7",
    title: "Tourist",
    href: "https://matheusoliv23.github.io/Tourist/",
    img: "/images/tourist.png"
  },
  {
    id: "8",
    title: "DeliciousAçai",
    href: "https://matheusoliv23.github.io/delicious_acai_projeto/",
    img: "/images/delicious.png"
  },
  {
    id: "4",
    title: "Todo-Redux",
    href: "https://lista-tarefas-redux.vercel.app/",
    img: "/images/redux.png"
  },
  {
    id: "5",
    title: "Live Chat",
    href: "https://chat-react-seven.vercel.app/",
    img: "/images/chat.png"
  },
  {
    id: "6",
    title: "MyBlog",
    href: "https://my-blog-omega-sand.vercel.app/",
    img: "/images/front.png"
  }
]

const breakpoints = {
  1024: {
    slidesPerView: 3.5,
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
    slidesPerGroup: 1,
    spaceBetween: 30
  }
}

export default function Projects() {
  const { t } = useTranslation()
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
          <h2 className="text-[40px] text-center mb-10">
            {t("projects.projects")}
          </h2>
        </motion.div>

        <Swiper
          speed={900}
          slidesPerView={3}
          className="ease flex items-center w-full justify-center m-auto h-full transition duration-200 cardsSwiper"
          navigation={true}
          loop={false}
          breakpoints={breakpoints}
          modules={[Navigation]}
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
