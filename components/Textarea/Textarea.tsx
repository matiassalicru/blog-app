import React, { FunctionComponent } from 'react'

// Styles
import { SCTextareaComponent } from './styles'

interface TextareaTypes {
  autoFocus?: boolean
  placeholder: string
}

export const Textarea: FunctionComponent<TextareaTypes> = ({
  autoFocus = false,
  placeholder = '',
}) => {
  return (
    <SCTextareaComponent
      autoFocus={autoFocus}
      placeholder={placeholder}
      rows={6}
    />
  )
}
