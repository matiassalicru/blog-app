import React from 'react'
import { fireEvent, render } from '@testing-library/react'
// Components
import { Button } from './Button'
import {
  ACCENT_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  DANGER_COLOR,
} from '../../styles/constants'

const setup = (mock = {}) => render(<Button onClick={jest.fn()} {...mock} />)

describe('<Button/>', () => {
  it('Should render the component', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  it('Should call onClick function when clicking the button', () => {
    const onClickMock = jest.fn()
    const { getByRole } = setup({ onClick: onClickMock })

    const button = getByRole('button')
    fireEvent.click(button)

    expect(onClickMock).toBeCalled()
  })

  it('Should have text passed by props', () => {
    const { getByRole } = setup({ text: 'Knock knock' })
    const button = getByRole('button')

    expect(button).toHaveTextContent('Knock knock')
  })

  it('Should be disabled if we pass the isDisabled prop as true', () => {
    const { getByRole } = setup({ disabled: true })
    const button = getByRole('button')

    expect(button).toBeDisabled()
  })

  it("Should have accent color is we DON'T pass the variant prop", () => {
    const { getByRole } = setup()
    const button = getByRole('button')
    expect(button).toHaveStyle(`background-color: ${ACCENT_COLOR}`)
  })

  it('Should have accent color is we pass the variant "primary"', () => {
    const { getByRole } = setup({ variant: 'primary' })
    const button = getByRole('button')
    expect(button).toHaveStyle(`border-radius: 8px`)
    expect(button).toHaveStyle(`background-color: ${ACCENT_COLOR}`)
  })

  it('Should be rounded is we pass the variant "roundedIcon"', () => {
    const { getByRole } = setup({ variant: 'roundedIcon' })
    const button = getByRole('button')
    expect(button).toHaveStyle('width: 64px')
    expect(button).toHaveStyle('height: 64px')
    expect(button).toHaveStyle('border-radius: 50%')
  })

  it('Should have "DANGER_COLOR" color is we pass the variant "danger"', () => {
    const { getByRole } = setup({ variant: 'danger' })
    const button = getByRole('button')
    expect(button).toHaveStyle(`background-color: ${DANGER_COLOR}`)
  })

  it("Should have 'BACKGROUND_SECONDARY_COLOR' as background color is we pass the variant 'secondary'", () => {
    const { getByRole } = setup({ variant: 'secondary' })
    const button = getByRole('button')
    expect(button).toHaveStyle(
      `background-color: ${BACKGROUND_SECONDARY_COLOR}`
    )
  })
})
