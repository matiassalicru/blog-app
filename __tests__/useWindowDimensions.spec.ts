import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

// Hooks
import { useWindowDimensions } from '../src/hooks/useWindowDimensions'

const setup = () => {
  return renderHook(() => useWindowDimensions())
}
describe('useWindowDimensions', () => {
  test('Height should be 0', async () => {
    global.innerWidth = 768
    const { result } = setup()

    await act(async () => {
      expect(result.current.height).toBe(768)
    })
  })

  test('Width should be 0', async () => {
    global.innerWidth = 1024
    const { result } = setup()

    await act(async () => {
      expect(result.current.width).toBe(1024)
    })
  })
})
