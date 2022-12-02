import { render } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'
import { act } from 'react-dom/test-utils'
import { Dashboard } from './Dashboard'

const setup = (mock = {}) =>
  render(
    <SessionProvider>
      <Dashboard {...mock} />
    </SessionProvider>
  )

describe('<Dashboard />', () => {
  test('should render the component', () => {
    const { container } = setup()
    act(() => {
      expect(container).toBeInTheDocument()
    })
  })
})
