import { render } from '@testing-library/react'

// Components
import { Plus } from '../../icons/Plus'
import { Alert } from './Alert'
import { DANGER_COLOR } from '../../styles/constants'
import { rgba2hex } from '../../utils/utils'

const setup = (mock = {}) => render(<Alert text="We were on a break!!!" {...mock} />)
describe('<Alert/>', () => {
  test('should render Alert component correctly', () => {
    const { container } = setup()

    expect(container).toHaveTextContent('We were on a break!!!')
  })

  test('should render Alert component with icon', () => {
    const { getByTestId } = setup({ icon: <Plus /> })

    const icon = getByTestId('plus-icon')
    expect(icon).toBeInTheDocument()
  })

  test('should render Alert with a variant', () => {
    const { getByTestId } = setup({ variant: 'danger' })

    const alert = getByTestId('alert-container')
    const styles = window.getComputedStyle(alert)
    expect(rgba2hex(styles.backgroundColor)).toBe(DANGER_COLOR)
  })
})
