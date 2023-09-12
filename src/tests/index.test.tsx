import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Home Page!/i,
    })

    expect(heading).toBeDefined()

    expect(container).toMatchSnapshot()
  })
})