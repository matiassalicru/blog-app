import { render, fireEvent } from '@testing-library/react'

// Components
import { Textarea } from './Textarea'

const setup = (mock = {}) => render(<Textarea onChange={() => true} {...mock} />)

describe('<Textarea />', () => {
  test('should render textarea correctly', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('should have "How you doing" as placeholder', () => {
    const { getByPlaceholderText } = setup({ placeholder: 'How you doing' })

    const areaWithPlaceholder = getByPlaceholderText('How you doing')
    expect(areaWithPlaceholder).toBeInTheDocument()
  })

  test('should be focused as we pass autoFocus param', () => {
    const { getByPlaceholderText } = setup({ placeholder: 'How you doing', autoFocus: true })

    const areaWithPlaceholder = getByPlaceholderText('How you doing')
    expect(areaWithPlaceholder).toHaveFocus()
  })

  test('should have "Joey Tribbiani" as value', () => {
    const onChangeMock = jest.fn()
    const { getByPlaceholderText } = setup({ onChange: onChangeMock, placeholder: 'How you doing' })

    const areaWithPlaceholder = getByPlaceholderText('How you doing')

    fireEvent.change(areaWithPlaceholder, { target: { value: 'Joey Tribbiani' } })
    expect(onChangeMock).toHaveBeenCalled()
    expect(areaWithPlaceholder).toHaveTextContent('Joey Tribbiani')
  })
})
