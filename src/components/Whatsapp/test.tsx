import { render, screen } from '@testing-library/react'

import Whatsapp from './index'

const { getByRole } = screen

describe('<Whatsapp />', () => {
  it('should render the heading', () => {
    render(<Whatsapp title="Bem vindo"/>)

    const heading = getByRole('heading', { name: 'Bem vindo' })

    expect(heading).toBeInTheDocument()
  })
})
