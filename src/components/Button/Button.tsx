import React, { FunctionComponent } from 'react'
import { SCButtonComponent } from './styles'

interface ButtonTypes {
  onClick: () => void
  text: string
  disabled?: boolean
}

export const Button: FunctionComponent<ButtonTypes> = ({ onClick, text, disabled = false }) => {
  return <SCButtonComponent onClick={onClick} disabled={disabled}>{text}</SCButtonComponent>
}
