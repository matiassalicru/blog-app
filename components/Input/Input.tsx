import React, { FunctionComponent } from 'react'

// Styles
import { SCInputComponent } from './styles'

interface InputTypes {
  type: string
  autoFocus?: boolean
  placeholder: string
}

export const Input: FunctionComponent<InputTypes> = ({
  type,
  autoFocus = false,
  placeholder = '',
}) => {
  return (
    <SCInputComponent
      type={type}
      autoFocus={autoFocus}
      placeholder={placeholder}
    />
  )
}
