import { render } from '@testing-library/react'
import { BasicLayout } from '../src/layout/Basic'

const setup = () => render(<BasicLayout>Hello</BasicLayout>)

describe('<Layout/>', () => {
  test('should render Layout correctly', () => {
    const { container } = setup()
    expect(container).toHaveTextContent('Hello')
  })
})
