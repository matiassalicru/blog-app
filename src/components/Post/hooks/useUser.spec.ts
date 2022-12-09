/* eslint-disable @typescript-eslint/no-var-requires */
import { act, renderHook } from '@testing-library/react-hooks'
import mockAxios from 'axios'
import { useUser } from './useUser'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: { post: '23' },
}))

jest.mock('axios')

const userData = {
  author: { name: 'Michael Scott', email: 'mscott@dundler.miffin' },
  getUserData: jest.fn,
  isAuthorLoading: false,
  isAuthenticated: true,
  setIsAuthenticated: jest.fn(),
}
;(mockAxios.get as any).mockImplementation(() => Promise.resolve({ data: { data: userData } }))

const setup = () => {
  return renderHook(() => useUser('authenticated'))
}
describe('useUser Hook', () => {
  test('getUserData', async () => {
    const { result } = setup()

    await act(async () => {
      result.current.getUserData('666')
    })

    expect(typeof result.current.getUserData).toBe('function')
  })
})
