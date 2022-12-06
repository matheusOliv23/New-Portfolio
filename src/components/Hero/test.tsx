import { render } from "@testing-library/react"

import Hero from "./index"

describe("<Hero />", () => {
  it("should  match snapshot", () => {
    const { container } = render(<Hero />)

    expect(container).toMatchSnapshot()
  })
})
