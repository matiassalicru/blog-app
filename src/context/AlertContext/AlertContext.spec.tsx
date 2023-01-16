import { fireEvent, render } from '@testing-library/react'
import { useContext } from 'react'
// Context
import AlertContextProvider, { AlertContext } from './AlertContext'
// Types
import { IAlertContext } from './AlertContext.interface'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

const TestingComponent = () => {
  const { alertInfo } = useContext(AlertContext)
  return (
    <>
      <p data-testid="alert-show">{alertInfo?.show.toString()}</p>
      <p data-testid="alert-variant">{alertInfo?.variant}</p>
    </>
  )
}

const TestingComponentWithNewValues = () => {
  const { alertInfo, setAlertInfo } = useContext(AlertContext)

  const handleInfo = () => {
    setAlertInfo((prev: IAlertContext) => ({ ...prev, show: true, variant: 'danger' }))
  }
  return (
    <>
      <button onClick={handleInfo} type="button" data-testid="alert-button">
        Click me
      </button>
      <p data-testid="alert-show">{alertInfo?.show.toString()}</p>
      <p data-testid="alert-variant">{alertInfo?.variant}</p>
    </>
  )
}

describe('<AuthProvider />', () => {
  test('provides expected AuthContext to child elements', () => {
    const { getByTestId } = render(
      <AlertContextProvider>
        <TestingComponent />
      </AlertContextProvider>
    )

    const alertShow = getByTestId('alert-show')
    const alertVariant = getByTestId('alert-variant')
    expect(alertShow).toHaveTextContent('false')
    expect(alertVariant).toHaveTextContent('primary')
  })

  test('provides expected AuthContext to child elements', () => {
    const { getByTestId } = render(
      <AlertContextProvider>
        <TestingComponentWithNewValues />
      </AlertContextProvider>
    )

    const alertShow = getByTestId('alert-show')
    const alertVariant = getByTestId('alert-variant')
    const alertButton = getByTestId('alert-button')
    fireEvent.click(alertButton)
    expect(alertShow).toHaveTextContent('true')
    expect(alertVariant).toHaveTextContent('danger')
  })

  test('provides expected AuthContext to child elements', () => {
    const { getByTestId } = render(
      <AlertContextProvider>
        <TestingComponentWithNewValues />
      </AlertContextProvider>
    )

    const alertShow = getByTestId('alert-show')
    const alertVariant = getByTestId('alert-variant')
    const alertButton = getByTestId('alert-button')
    fireEvent.click(alertButton)
    expect(alertShow).toHaveTextContent('true')
    expect(alertVariant).toHaveTextContent('danger')

    setTimeout(() => {
      expect(setTimeout).toBeCalled()
      expect(alertShow).toHaveTextContent('false')
    }, 5000)
  })
})
