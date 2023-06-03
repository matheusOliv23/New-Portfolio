import { useTranslation } from "react-i18next"
import { Link } from "react-scroll"

export default function Header() {
  const { t } = useTranslation()

  const menu = [
    { id: 1, name: t("menu.home"), route: "home" },
    { id: 2, name: t("menu.about"), route: "about" },
    { id: 3, name: t("menu.projects"), route: "projects" },
    { id: 4, name: t("menu.skills"), route: "skills" }
  ]

  return (
    <header className="w-full bg-dark-200 top-0 z-50 sticky border-b-[0.3px] border-[#ffffff14] py-4 px-6 md:justify-end">
      <nav className="flex justify-end items-end">
        <ul className="flex items-center gap-9 justify-between">
          {menu.map((item) => (
            <li
              className="hover:text-secondary active:text-secondary cursor-pointer"
              key={item.id}
            >
              <Link
                activeClass="text-secondary"
                to={item.route}
                spy={true}
                smooth={true}
                offset={-110}
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
