/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import PostPage from '../src/pages/post/[post]'

jest.mock('next-auth/react')
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const usePost = jest.spyOn(require('../src/components/Post/hooks/usePost'), 'usePost')
const useUser = jest.spyOn(require('../src/components/Post/hooks/useUser'), 'useUser')

usePost.mockImplementation(() => ({
  post: { user_id: '666' },
  isPostLoading: false,
  getPostData: jest.fn,
  handleDeletePost: jest.fn,
}))

useUser.mockImplementation(() => ({
  author: { name: 'Michael Scott', email: 'mscott@dundler.miffin' },
  getUserData: jest.fn,
  isAuthorLoading: false,
  isAuthenticated: true,
  setIsAuthenticated: jest.fn(),
}))

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: { post: '661' },
}))
;(useSession as jest.Mock).mockReturnValue({
  status: 'authenticated',
  data: {
    user: {
      name: 'Michael Scott',
      email: 'mscott@dundler.miffin',
      id: '666',
      image: 'https://avatars.githubusercontent.com/u/40377128?v=4',
    },
    expires: 'sometime',
  },
})

const setup = () => render(<PostPage />)

describe('<PostPage/>', () => {
  test('should render PostPage', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })
})
