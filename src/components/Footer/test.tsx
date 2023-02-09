import { render, screen } from "@testing-library/react"

import Footer from "./index"

const { getByRole, getByText } = screen

describe("<Footer />", () => {
  it("should render footer correctly", () => {
    render(<Footer />)

    const heading = getByRole("heading", {
      name: "Desenvolvido por Matheus H Oliveira"
    })
    const rigths = getByText("Todos os direitos reservados")
    const copyright = getByText(`Copyright @${new Date().getFullYear()}`)

    expect(heading).toBeInTheDocument()
    expect(rigths).toBeInTheDocument()
    expect(copyright).toBeInTheDocument()
  })
})
