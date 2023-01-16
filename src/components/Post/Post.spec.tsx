/* eslint-disable @typescript-eslint/no-var-requires */
import { render, waitFor, fireEvent } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { Post } from './Post'

jest.mock('next-auth/react')
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const usePost = jest.spyOn(require('./hooks/usePost'), 'usePost')
const useUser = jest.spyOn(require('./hooks/useUser'), 'useUser')

usePost.mockImplementation(() => ({
  post: { user_id: '666' },
  isPostLoading: false,
  getPostData: jest.fn(),
  handleDeletePost: jest.fn(),
}))

useUser.mockImplementation(() => ({
  author: { name: 'Michael Scott', email: 'mscott@dundler.miffin' },
  getUserData: jest.fn(),
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

const setup = (mock = {}) => render(<Post {...mock} />)

describe('<Post>', () => {
  test('should render Post correctly', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })

  test('should render Michael Scott as author name', () => {
    const { getByTestId } = setup()

    const authorName = getByTestId('author-name')
    const authorEmail = getByTestId('author-email')
    expect(authorEmail).toHaveTextContent('mscott@dundler.miffin')
    expect(authorName).toHaveTextContent('Author: Michael Scott')
  })

  test('should render Michael Scott (you) as author name', async () => {
    const { getByTestId } = setup()

    await waitFor(() => {
      const authorName = getByTestId('author-name')
      expect(authorName).toHaveTextContent('Author: Michael Scott(you)')
    })
  })

  test('should not show Post components if we click on Back button', () => {
    const { queryByTestId, getAllByRole } = setup()

    const backButton = getAllByRole('button')
    expect(backButton[0]).toHaveTextContent('Back')
    fireEvent.click(backButton[0])

    setTimeout(() => {
      const postAuthorName = queryByTestId('author-name')
      expect(postAuthorName).not.toBeInTheDocument()
    }, 2000)
  })

  test('should render modal when clicking on delete button', async () => {
    const { queryByTestId, getAllByRole } = setup()

    await waitFor(() => {
      const deleteButton = getAllByRole('button')
      expect(deleteButton[1]).toHaveTextContent('Delete')

      fireEvent.click(deleteButton[1])
      const modalComponent = queryByTestId('modal-text-content')
      expect(modalComponent).toBeInTheDocument()
    })
  })

  test('should hide modal when click on modal backdrop', async () => {
    const { getByTestId, queryByTestId, getAllByRole } = setup()

    const deleteButton = getAllByRole('button')
    expect(deleteButton[1]).toHaveTextContent('Delete')

    fireEvent.click(deleteButton[1])
    const modalComponent = queryByTestId('modal-text-content')
    expect(modalComponent).toBeInTheDocument()

    const modalBackdrop = getByTestId('modal-backdrop')
    fireEvent.click(modalBackdrop)
    expect(modalComponent).not.toBeInTheDocument()
  })

  test('should hide modal when click on cancel modal button', async () => {
    const { getByText, queryByTestId, getAllByRole } = setup()

    const deleteButton = getAllByRole('button')
    expect(deleteButton[1]).toHaveTextContent('Delete')

    fireEvent.click(deleteButton[1])
    const modalComponent = queryByTestId('modal-text-content')
    expect(modalComponent).toBeInTheDocument()

    const modalCancelButton = getByText('Cancel')
    fireEvent.click(modalCancelButton)
    expect(modalComponent).not.toBeInTheDocument()
  })

  test('should show alert when click on Delete button', async () => {
    const { getByText, queryByTestId, getAllByRole } = setup()
    const deleteButton = getAllByRole('button')
    expect(deleteButton[1]).toHaveTextContent('Delete')

    fireEvent.click(deleteButton[1])
    const modalComponent = queryByTestId('modal-text-content')
    expect(modalComponent).toBeInTheDocument()

    const modalDeleteButton = getByText('Delete')
    fireEvent.click(modalDeleteButton)
    expect(modalComponent).toBeInTheDocument()
  })

  test("should render Legacy user as author name if the user doesn't exists", () => {
    useUser.mockImplementation(() => ({
      author: null,
      getUserData: jest.fn,
      isAuthorLoading: false,
      isAuthenticated: false,
      setIsAuthenticated: jest.fn,
    }))

    const { getByTestId } = setup()
    const authorName = getByTestId('author-name')
    const authorEmail = getByTestId('author-email')
    expect(authorEmail).toHaveTextContent('legacyuser@msalicru.com')
    expect(authorName).toHaveTextContent('Author: Legacy user')
  })

  test('should render Skeleton if Post and author are loading', () => {
    usePost.mockImplementation(() => ({
      post: null,
      isPostLoading: true,
      getPostData: jest.fn(),
      handleDeletePost: jest.fn(),
    }))

    useUser.mockImplementation(() => ({
      author: {},
      getUserData: jest.fn(),
      isAuthorLoading: true,
      isAuthenticated: false,
      setIsAuthenticated: jest.fn(),
    }))
    const { getByTestId } = setup()

    const skeleton = getByTestId('post-skeleton')
    expect(skeleton).toBeInTheDocument()
  })
})
