import { render, screen } from "@testing-library/react"

import SocialIcons from "./index"

const { getByText } = screen

describe("<SocialIcons />", () => {
  it("should render by default", () => {
    render(<SocialIcons />)

    const instagram = getByText("Instagram")
    const linkedin = getByText("Linkedin")
    const github = getByText("Github")

    expect(instagram).toBeInTheDocument()
    expect(linkedin).toBeInTheDocument()
    expect(github).toBeInTheDocument()
  })

  it("should match snapshot", () => {
    const { container } = render(<SocialIcons />)

    expect(container).toMatchSnapshot()
  })
})
