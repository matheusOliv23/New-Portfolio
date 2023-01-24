import React from "react"

export default function About() {
  return (
    <div className="flex w-full lg:flex-row flex-col font-openSans gap-10 max-w-7xl px-7 py-6 md:py-20 lg:py-32 m-auto xl:justify-between lg:justify-center">
      <div className="space-y-4">
        <h2 className="text-xl text-primary">Sobre mim</h2>
        <p className="md:text-4xl text-2xl lg:max-w-lg font-medium leading-10">
          Venho trabalhando com Desenvolvimento Web desde 2021
        </p>
        <p className="lg:max-w-xl text-justify">
          Tenho como objetivo principal me tornar destaque no desenvolvimento
          web, principalmente na parte de Front-End. Sou uma pessoa muito
          dedicada, educada, responsável e gosto muito de novos desafios. Prezo
          muito pela qualidade e satisfação dos clientes e tenho a mente bem
          aberta para receber feedbacks, tanto positivos quanto negativos.
        </p>
      </div>

      <div className="flex items-center justify-center flex-col w-full lg:max-w-sm space-y-4">
        <div className="flex w-full justify-between md:gap-16 md:justify-start lg:justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-6xl font-semibold text-primary">1.5</p>
            <p className="text-sm">
              anos <br /> de experiência
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-6xl font-semibold text-primary">6</p>
            <p className="text-sm">
              projetos <br /> concluídos
            </p>
          </div>
        </div>

        <p className="text-justify">
          Experiência em desenvolvimento de aplicações web responsivas
          utilizando Javascript, Typescript e Reactjs.
        </p>
      </div>
    </div>
  )
}
