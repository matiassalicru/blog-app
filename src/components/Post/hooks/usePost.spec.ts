/* eslint-disable @typescript-eslint/no-var-requires */
import { act, renderHook } from '@testing-library/react-hooks'
import mockAxios from 'axios'
import { usePost } from './usePost'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: { post: '23' },
}))

jest.mock('axios')
jest.spyOn(window, 'alert').mockImplementation(() => true)

const posts = {
  _id: '6383960520ab09117fbfd5c4',
  title: 'Last post',
  text: "Is this a post from a new user Id ? I don't think so but we need to clarify this things ",
  topic: 'Test',
  user_id: '638381cee404da6e2c176c16',
  date: '2022-11-27T16:53:25.378Z',
  id: 23,
}

;(mockAxios.get as any).mockImplementation(() => Promise.resolve({ data: { data: posts } }))
;(mockAxios.delete as any).mockImplementation(() => Promise.resolve({ data: { ok: true } }))

const setup = () => {
  return renderHook(() => usePost(jest.fn()))
}
describe('usePost Hook', () => {
  test('getPostData', async () => {
    const { result } = setup()

    await act(async () => {
      result.current.getPostData('666')
    })

    expect(typeof result.current.getPostData).toBe('function')
  })

  test('handleDeletePost', async () => {
    const { result } = setup()

    await act(async () => {
      result.current.handleDeletePost()
    })

    expect(typeof result.current.handleDeletePost).toBe('function')
  })

  test('handleDeletePost with ok in false', async () => {
    ;(mockAxios.delete as any).mockImplementation(() => Promise.resolve({ data: { ok: false } }))

    const { result } = setup()

    await act(async () => {
      result.current.handleDeletePost()
    })

    expect(typeof result.current.handleDeletePost).toBe('function')
  })
})
