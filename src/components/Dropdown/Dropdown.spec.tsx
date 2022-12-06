import { render, fireEvent } from '@testing-library/react'
import { Dropdown } from './Dropdown'

const options = [{ id: '1', name: 'value 1', onClick: jest.fn() }]

const setup = (mock = {}) => render(<Dropdown {...mock} options={options} />)

describe('<Dropdown>', () => {
  test('should render Dropdown correctly', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('should hide menu button onclick', () => {
    const { queryByTestId } = setup()

    const button = queryByTestId('dropdown-button') as HTMLElement
    const l1DropdownAsNull = queryByTestId('l1-dropdown-container')
    expect(l1DropdownAsNull).toBeNull()

    fireEvent.click(button)

    const l1Dropdown = queryByTestId('l1-dropdown-container')
    expect(l1Dropdown).toBeInTheDocument()
  })

  test('should close dropdown when click on backdrop', () => {
    const { queryByTestId } = setup()

    const button = queryByTestId('dropdown-button') as HTMLElement
    fireEvent.click(button)

    const l1Dropdown = queryByTestId('l1-dropdown-container')
    expect(l1Dropdown).toBeInTheDocument()

    const backdrop = queryByTestId('dropdown-backdrop') as HTMLElement
    fireEvent.click(backdrop)

    const l1DropdownAsNull = queryByTestId('l1-dropdown-container')
    expect(l1DropdownAsNull).toBeNull()
  })
})
