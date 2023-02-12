import { Link } from "react-scroll"

const menu = [
  { id: 1, name: "Home", route: "home" },
  { id: 2, name: "Sobre", route: "about" },
  { id: 3, name: "Projetos", route: "projects" },
  { id: 4, name: "Habilidades", route: "skills" }
]

export default function Header() {
  return (
    <header className="flex items-center justify-center  w-full border-b-[0.3px] border-[#ffffff14] p-4 px-6 md:justify-end">
      <nav>
        <ul className="flex items-center gap-9 justify-between">
          {menu.map((item) => (
            <li
              data-to-scrollspy-id={item.route}
              className="hover:text-secondary cursor-pointer"
              key={item.id}
            >
              <Link
                activeClass="active"
                to={item.route}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href={item.route}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
