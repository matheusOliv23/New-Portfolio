import { render, screen } from "@testing-library/react"

import Header from "./index"

const { getByText } = screen

describe("<Header />", () => {
  it("should render by default", () => {
    render(<Header />)

    const homeLink = getByText("Home")
    const aboutLink = getByText("Sobre Mim")
    const projectsLink = getByText("Projetos")
    const skillsLink = getByText("Habilidades")

    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(projectsLink).toBeInTheDocument()
    expect(skillsLink).toBeInTheDocument()
  })

  it("should match snapshot", () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
