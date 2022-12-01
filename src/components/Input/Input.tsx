import React, { FunctionComponent } from 'react'

// Styles
import { SCInputComponent } from './styles'

interface InputTypes {
  type: string
  value?: string
  autoFocus?: boolean
  placeholder?: string
  onChange?: (e: any) => void
}

export const Input: FunctionComponent<InputTypes> = ({
  type,
  autoFocus = false,
  placeholder = '',
  value = '',
  onChange = () => true,
}) => {
  return (
    <SCInputComponent type={type} value={value} onChange={onChange} autoFocus={autoFocus} placeholder={placeholder} />
  )
}
