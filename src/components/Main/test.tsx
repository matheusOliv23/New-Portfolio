import { render, screen } from '@testing-library/react'

import Main from './index'

const { getByRole } = screen

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main title="Bem vindo"/>)

    const heading = getByRole('heading', { name: 'Bem vindo' })

    expect(heading).toBeInTheDocument()
  })
})
