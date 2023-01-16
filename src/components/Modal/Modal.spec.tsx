import { fireEvent, render } from '@testing-library/react'
import { Modal } from './Modal'

const setup = (mock = {}) => render(<Modal onCancel={jest.fn()} onSubmit={jest.fn()} text="Dundler Miffin" {...mock} />)

describe('<Modal />', () => {
  test('should render modal correctly', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('should call onCancel callback when click on "Cancel" button', async () => {
    const onCancelMock = jest.fn()
    const { getByRole } = setup({ onCancel: onCancelMock })

    const cancelButton = getByRole('button', { name: 'Cancel' })
    fireEvent.click(cancelButton)
    expect(onCancelMock).toHaveBeenCalled()
  })

  test('should call onCancel callback when click on modal backdrop', async () => {
    const onCancelMock = jest.fn()
    const { getByTestId } = setup({ onCancel: onCancelMock })

    const modalBackdrop = getByTestId('modal-backdrop')
    fireEvent.click(modalBackdrop)
    expect(onCancelMock).toHaveBeenCalled()
  })

  test('should call onSubmit callback when click on "Delete" button', async () => {
    const onSubmitMock = jest.fn()
    const { getByRole } = setup({ onSubmit: onSubmitMock })

    const submitButton = getByRole('button', { name: 'Delete' })
    fireEvent.click(submitButton)
    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('should render "UNAGI" title', async () => {
    const { getByRole } = setup({ title: 'UNAGI' })

    const title = getByRole('heading')
    expect(title).toHaveTextContent('UNAGI')
  })

  test('should render "I\'m just a love machine" title', async () => {
    const { getByTestId } = setup({ text: "I'm just a love machine" })

    const text = getByTestId('modal-text-content')
    expect(text).toHaveTextContent("I'm just a love machine")
  })

  test('Buttons should be disabled if disabled prop is true', async () => {
    const onSubmitMock = jest.fn()
    const { getByRole } = setup({ onSubmit: onSubmitMock, text: "I'm just a love machine", disableButtons: true })

    const submitButton = getByRole('button', { name: 'Delete' })
    const cancelButton = getByRole('button', { name: 'Cancel' })
    expect(submitButton).toBeDisabled()
    expect(cancelButton).toBeDisabled()
  })

  test('Backdrop should be disabled if disabled prop is true', async () => {
    const { getByTestId } = setup({ text: "I'm just a love machine", disableButtons: true })

    const modalBackdrop = getByTestId('modal-backdrop')
    const style = window.getComputedStyle(modalBackdrop)
    expect(style.pointerEvents).toBe('none')
  })
})
