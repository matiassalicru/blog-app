import { render } from '@testing-library/react'
import { InfoTile } from './InfoTile'

describe('<InfoTile />', () => {
  test('should render the component correctly', () => {
    const { container } = render(<InfoTile />)
    expect(container).toBeInTheDocument()
  })
})
