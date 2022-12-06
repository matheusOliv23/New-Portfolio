import { render, screen } from "@testing-library/react"

import Button from "./index"

const { getByRole } = screen

describe("<Button />", () => {
  it("should render the heading", () => {
    render(<Button variant="PRIMARY">Botão</Button>)

    const component = getByRole("button", { name: "Botão" })

    expect(component).toBeInTheDocument()
  })
})
