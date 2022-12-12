import { render, screen } from "@testing-library/react"

import Headline from "./index"

const { getByRole, getByText } = screen

describe("<Headline />", () => {
  it("should render the Headline", () => {
    render(<Headline />)

    const title = getByRole("heading", { name: "MATHEUS HENRIQUE OLIVEIRA" })
    const subtitle = getByRole("heading", { name: "Desenvolvedor Front-End" })
    const text = getByText(
      "Transformando sonhos em realidade por meio da tecnologia"
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it("should match snapshot", () => {
    const { container } = render(<Headline />)

    expect(container).toMatchSnapshot()
  })
})
