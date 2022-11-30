import { render } from '@testing-library/react'
import { Button } from './Button'

const setup = () => render(<Button onClick={jest.fn} />)

describe('<Button/>', () => {
  it('Should render the component', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
