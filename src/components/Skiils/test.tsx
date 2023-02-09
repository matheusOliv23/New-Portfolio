import React from "react"
import { render, screen } from "@testing-library/react"
import Skills from "."

const { getByText } = screen

describe("Skills component", () => {
  it("renders skills correctly", () => {
    const skills = [
      {
        title: "JavaScript",
        icon: <i className="fab fa-js-square"></i>
      },
      {
        title: "React",
        icon: <i className="fab fa-react"></i>
      }
    ]

    render(<Skills skills={skills} />)

    expect(getByText("Habilidades")).toBeInTheDocument()
    expect(getByText("JavaScript")).toBeInTheDocument()
    expect(getByText("React")).toBeInTheDocument()
  })
})
