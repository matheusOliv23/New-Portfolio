interface ProjectCardProps {
  title?: string
  href: string
  img: string
}

export default function ProjectCard({ title, href, img }: ProjectCardProps) {
  return (
    <div
      style={{
        backgroundImage: `url('${img}')`,
        backgroundBlendMode: "lighten"
      }}
      className="flex h-[326px] transition-all duration-300 hover:scale-105 cursor-pointer bg-contain relative bg-no-repeat bg-center rounded-lg justify-center items-center w-[320px] bg-dark-300"
    >
      <div className="px-3 bg-dark-300 absolute bottom-0 text-xl rounded-b-lg h-14 w-full">
        <div className="flex items-center justify-between">
          <p>{title}</p>
          <a
            href={href}
            target="_blank"
            className="hover:text-primary rounded border border-primary p-1" rel="noreferrer"
          >
            <p className="font-medium">Ver site</p>
          </a>
        </div>
      </div>
    </div>
  )
}
