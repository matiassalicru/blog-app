import React, { ChangeEvent, FunctionComponent, useState } from 'react'

// Styles
import { SCTextareaComponent } from './styles'

interface TextareaTypes {
  autoFocus?: boolean
  placeholder?: string
  onChange: (e: string) => void
}

export const Textarea: FunctionComponent<TextareaTypes> = ({ autoFocus = false, placeholder = '', onChange }) => {
  const [textValue, setTextValue] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <SCTextareaComponent
      rows={6}
      value={textValue}
      onChange={e => handleOnChange(e)}
      autoFocus={autoFocus}
      placeholder={placeholder}
    />
  )
}
