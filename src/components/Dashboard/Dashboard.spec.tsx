/* eslint-disable @typescript-eslint/no-var-requires */
import { render, fireEvent, waitFor } from '@testing-library/react'
import mockAxios from 'axios'
// Auth
import { useSession } from 'next-auth/react'
// Components
import { Dashboard } from './Dashboard'

jest.mock('axios')
jest.mock('next-auth/react')

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const getData = jest.spyOn(require('./utils'), 'getData')

const posts = [
  {
    _id: '6383960520ab09117fbfd5c4',
    title: 'title 1',
    text: "Rachel's list",
    topic: 'Test',
    user_id: '638381cee404da6e2c176c16',
    date: '2022-11-27T16:53:25.378Z',
    id: 23,
  },
]

;(mockAxios.get as any).mockImplementation(() => Promise.resolve({ data: { data: posts } }))

describe('<Dashboard />', () => {
  it('renders correctly when signed out', async () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: {},
      status: 'unauthenticated',
    })
    getData.mockResolvedValue(posts)

    const { container } = render(<Dashboard />)

    await waitFor(() => {
      expect(container).toBeInTheDocument()
    })
  })

  it('should show + button when signed in', async () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: {
        name: 'Matías Salicrú',
        email: 'mattiassalicru@gmail.com',
        id: '648681cee404da6e2c176c18',
        image: 'https://avatars.githubusercontent.com/u/40377128?v=4',
      },
      status: 'authenticated',
    })
    getData.mockResolvedValue(posts)

    useRouter.mockImplementation(() => ({
      push: jest.fn,
    }))

    const { getByRole } = render(<Dashboard />)

    await waitFor(() => {
      const newPostButton = getByRole('button')
      const clickEvent = fireEvent.click(newPostButton)
      expect(clickEvent).toBe(true)
      expect(newPostButton).toBeInTheDocument()
    })
  })

  test('should show posts data', async () => {
    const { getByText } = render(<Dashboard />)
    getData.mockResolvedValue(posts)

    await waitFor(() => {
      const title = getByText('title 1')
      expect(title).toBeInTheDocument()
    })
  })
})
