import Button from "../Button"

export default function Headline() {
  return (
    <div className="flex flex-col lg:items-start z-50 gap-8 !opacity-100 items-center justify-center lg:text-start text-center">
      <h1 className="font-bold md:text-5xl text-2xl tracking-widest ">
        MATHEUS HENRIQUE OLIVEIRA
      </h1>
      <h2 className="lg:text-5xl text-4xl text-[#8a8f98] font-medium tracking-widest mt-2">
        Desenvolvedor <strong className="text-primary">Front-End</strong>
      </h2>
      <h3 className="lg:text-3xl text-2xl max-w-[32rem]">
        Transformando sonhos em realidade por meio da tecnologia
      </h3>
      <div className="flex gap-6 justify-center items-center">
        <Button type="button" variant="PRIMARY">
          Quem sou eu
        </Button>
      </div>
    </div>
  )
}
