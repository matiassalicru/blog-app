import { render } from '@testing-library/react'
import { Plus } from './Plus'

describe('<Plus>', () => {
  test('should render Plus icon with default width', () => {
    const { getByTestId } = render(<Plus />)

    const plusIcon = getByTestId('plus-icon')
    expect(plusIcon).toHaveAttribute('width', '24px')
    expect(plusIcon).toHaveAttribute('height', '24px')
  })

  test('should render Plus icon with custom 16px width and 32px height', () => {
    const { getByTestId } = render(<Plus width="16px" height="32px" />)

    const plusIcon = getByTestId('plus-icon')
    expect(plusIcon).toHaveAttribute('width', '16px')
    expect(plusIcon).toHaveAttribute('height', '32px')
  })
})
