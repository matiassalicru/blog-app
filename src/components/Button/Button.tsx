import React, { FunctionComponent } from 'react'

// Types
import { IButton } from './Button.interface'

// Styles
import { SCButtonComponent } from './styles'

export const Button: FunctionComponent<IButton> = ({ onClick, text, disabled = false, variant = 'primary', icon }) => {
  return (
    <SCButtonComponent onClick={onClick} disabled={disabled} variant={variant}>
      {variant === 'roundedIcon' ? icon : text}
    </SCButtonComponent>
  )
}
