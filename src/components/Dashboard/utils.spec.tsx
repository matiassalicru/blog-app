import mockAxios from 'axios'
import { getData } from './utils'

jest.mock('axios')

const posts = [
  {
    _id: '6383960520ab09117fbfd5c4',
    title: 'Last post',
    text: "Is this a post from a new user Id ? I don't think so but we need to clarify this things ",
    topic: 'Test',
    user_id: '638381cee404da6e2c176c16',
    date: '2022-11-27T16:53:25.378Z',
    id: 23,
  },
]

;(mockAxios.get as any).mockImplementation(() => Promise.resolve({ data: { data: posts } }))

describe('getData', () => {
  test('should return data', async () => {
    const result = await getData()

    expect(result).toBe(posts)
  })

  test('should return error as there is no "data" in the resolve', async () => {
    ;(mockAxios.get as any).mockImplementation(() => Promise.resolve({}))
    const result = await getData()

    expect(result).not.toBe(posts)
  })
})
