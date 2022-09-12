import React, { FunctionComponent } from 'react'
import { SCButtonComponent } from './styles'

interface ButtonTypes {
  onClick: () => void
  text: string
}

export const Button: FunctionComponent<ButtonTypes> = ({ onClick, text }) => {
  return <SCButtonComponent onClick={onClick}>{text}</SCButtonComponent>
}
