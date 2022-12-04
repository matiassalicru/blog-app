import { cleanup, fireEvent, render } from '@testing-library/react'
import { Input } from './Input'

afterEach(cleanup)

const setup = (mock = {}) => render(<Input type="text" {...mock} />)
describe('<Input/>', () => {
  test('should render input correctly', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('should be focused on render', () => {
    const { getByRole } = setup({ autoFocus: true })

    const inputComponent = getByRole('textbox')
    expect(inputComponent).toHaveFocus()
  })

  test('should be focused on render', () => {
    const { getByRole } = setup({ autoFocus: true })

    const inputComponent = getByRole('textbox')
    expect(inputComponent).toHaveFocus()
  })

  test('should have placeholder "Rachel or Ross?"', () => {
    const { getByRole } = setup({ placeholder: 'Rachel or Ross?' })

    const inputComponent = getByRole('textbox')
    expect(inputComponent).toHaveAttribute('placeholder', 'Rachel or Ross?')
  })

  test('should have value "How you doing?"', () => {
    const { getByRole } = setup()

    const inputComponent = getByRole('textbox')
    fireEvent.change(inputComponent, { target: { value: 'How you doing?' } })
    expect(inputComponent).toHaveValue('How you doing?')
  })

  test('should call onChange function on changing value', async () => {
    const onChangeMock = jest.fn()
    const { getByRole } = setup({ autoFocus: true, onChange: onChangeMock, placeholder: 'Janice' })

    const inputComponent = getByRole('textbox') as HTMLInputElement

    expect(inputComponent).toHaveFocus()

    fireEvent.change(inputComponent, { target: { value: 'Oh My God!' } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(inputComponent.value).toBe('Oh My God!')
  })
})
