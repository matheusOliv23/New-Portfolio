type SkillType = {
  title: string
  icon: JSX.Element
}

interface SkillsProps {
  skills: SkillType[]
}

export default function Skiils({ skills }: SkillsProps) {
  return (
    <div className="flex w-full flex-col items-center font-openSans gap-10 md:px-7 py-6 md:py-20 lg:py-32 m-auto lg:justify-center">
      <h2 className="text-[40px] text-center mb-10">Habilidades</h2>

      <div className="flex md:justify-between justify-center md:gap-0 gap-6 w-4/5 flex-wrap">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-primary text-center font-light pb-2">
              {item.title}
            </span>
            <span className="w-24 h-24">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
