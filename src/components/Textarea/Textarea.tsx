import React, { FunctionComponent } from 'react'

// Styles
import { SCTextareaComponent } from './styles'

interface TextareaTypes {
  autoFocus?: boolean
  placeholder: string
  value?: string
  onChange?: (e: any) => void
}

export const Textarea: FunctionComponent<TextareaTypes> = ({
  autoFocus = false,
  placeholder = '',
  value = '',
  onChange = () => true,
}) => {
  return (
    <SCTextareaComponent rows={6} value={value} onChange={onChange} autoFocus={autoFocus} placeholder={placeholder} />
  )
}
