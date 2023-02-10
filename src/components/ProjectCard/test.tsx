import { render, screen } from "@testing-library/react"

import ProjectCard from "./index"

const { getByText, getByTestId } = screen

const title = "Test Title"
const img = "https://example.com/test.jpg"
const href = "Ver site"

describe("<ProjectCard />", () => {
  it("should render the component with the correct title, image, and link", () => {
    render(<ProjectCard title={title} img={img} href={href} />)

    const titleText = getByText(title)
    const testImage = getByTestId("test-image")
    const link = getByText(href)

    expect(titleText).toBeInTheDocument()
    expect(testImage).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})
