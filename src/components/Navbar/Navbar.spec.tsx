/* eslint-disable @typescript-eslint/no-var-requires */
import { render, waitFor, fireEvent } from '@testing-library/react'
// Auth
import { useSession, signIn, signOut } from 'next-auth/react'
// Components
import { Navbar } from './Navbar'
// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions'

jest.mock('next-auth/react')
jest.mock('../../hooks/useWindowDimensions')
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  pathname: '/',
  replace: jest.fn(),
  push: jest.fn(),
}))

const setup = (mock = {}) => render(<Navbar {...mock} />)

;(useWindowDimensions as jest.Mock).mockReturnValue({ width: 1080 })
;(useSession as jest.Mock).mockReturnValue({
  data: {},
  status: 'unauthenticated',
})
;(signIn as jest.Mock).mockReturnValue({})
;(signOut as jest.Mock).mockReturnValue({})

describe('<Navbar />', () => {
  test('should render navbar correctly', async () => {
    const { container } = setup()

    await waitFor(() => {
      expect(container).toBeInTheDocument()
    })
  })

  test('should show "Sign In" button as the user is NOT authenticated', async () => {
    const { container } = setup()

    const signInButton = container.querySelector('p')
    const clickEvent = signInButton ? fireEvent.click(signInButton) : null
    expect(clickEvent).toBe(true)

    await waitFor(() => {
      expect(signInButton).toHaveTextContent('Sign In')
    })
  })

  test('should show "Sign out" button as the user is authenticated', async () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: {
        name: 'Rachel Green',
        email: 'larachelverde@gmail.com',
        id: '648681cee404da6e2c176c18',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Rachel_Green_Rachel_haircut.jpg/170px-Rachel_Green_Rachel_haircut.jpg',
      },
      status: 'authenticated',
    })
    const { container } = setup()

    const signOutButton = container.querySelector('p')
    const eventClick = signOutButton ? fireEvent.click(signOutButton) : null
    expect(eventClick).toBe(true)

    await waitFor(() => {
      expect(signOutButton).toHaveTextContent('Sign out')
    })
  })

  test('should call replace function from useRouter as the pathname is not "/"', async () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: {
        name: 'Rachel Green',
        email: 'larachelverde@gmail.com',
        id: '648681cee404da6e2c176c18',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Rachel_Green_Rachel_haircut.jpg/170px-Rachel_Green_Rachel_haircut.jpg',
      },
      status: 'authenticated',
    })

    const replaceMock = jest.fn()
    useRouter.mockImplementation(() => ({
      pathname: 'Miffin',
      replace: replaceMock,
      push: jest.fn(),
    }))
    const { container } = setup()

    const signOutButton = container.querySelector('p')
    const eventClick = signOutButton ? fireEvent.click(signOutButton) : null
    expect(eventClick).toBe(true)

    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalled()
    })
  })

  test('should render navbar correctly with dropdown menu', async () => {
    const { container } = setup()
    ;(useWindowDimensions as jest.Mock).mockReturnValue({ width: 768 })

    await waitFor(() => {
      expect(container).toBeInTheDocument()
    })
  })

  test('should call useRouter push on homebutton click', async () => {
    const { getByText } = setup()

    const homeButton = getByText('Matías Salicrú')
    const clickEvent = fireEvent.click(homeButton)
    expect(clickEvent).toBe(true)

    await waitFor(() => {
      expect(homeButton).toBeInTheDocument()
    })
  })

  test('Should call windown.open function from dropdown menu', async () => {
    ;(useWindowDimensions as jest.Mock).mockReturnValue({ width: 768 })
    global.open = jest.fn()

    const { queryByTestId, getByText } = setup()

    const button = queryByTestId('dropdown-button') as HTMLElement
    fireEvent.click(button)

    const l1Dropdown = queryByTestId('l1-dropdown-container')
    expect(l1Dropdown).toBeInTheDocument()

    const portfolioButton = getByText('Portfolio')
    expect(portfolioButton).toBeInTheDocument()

    fireEvent.click(portfolioButton)
    expect(global.open).toBeCalled()
  })

  test('Should call onSignInOut function from dropdown menu', async () => {
    ;(useWindowDimensions as jest.Mock).mockReturnValue({ width: 768 })
    ;(useSession as jest.Mock).mockReturnValue({
      data: {
        name: 'Rachel Green',
        email: 'larachelverde@gmail.com',
        id: '648681cee404da6e2c176c18',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Rachel_Green_Rachel_haircut.jpg/170px-Rachel_Green_Rachel_haircut.jpg',
      },
      status: 'authenticated',
    })

    const replaceMock = jest.fn()
    useRouter.mockImplementation(() => ({
      pathname: 'Miffin',
      replace: replaceMock,
      push: jest.fn(),
    }))
    const { queryByTestId, getByText } = setup()

    const button = queryByTestId('dropdown-button') as HTMLElement
    fireEvent.click(button)

    const l1Dropdown = queryByTestId('l1-dropdown-container')
    expect(l1Dropdown).toBeInTheDocument()

    const signOutButton = getByText('Sign out')
    expect(signOutButton).toBeInTheDocument()

    fireEvent.click(signOutButton)
    expect(replaceMock).toBeCalled()
  })
})
