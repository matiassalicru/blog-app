import React, { FunctionComponent, useState } from 'react'

// Styles
import { SCInputComponent } from './styles'

interface InputTypes {
  type: string
  autoFocus?: boolean
  placeholder?: string
  onChange?: (e: any) => void
}

export const Input: FunctionComponent<InputTypes> = ({
  type,
  autoFocus = false,
  placeholder = '',
  onChange = () => true,
}) => {
  const [value, setValue] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <SCInputComponent
      type={type}
      value={value}
      onChange={handleOnChange}
      autoFocus={autoFocus}
      placeholder={placeholder}
    />
  )
}
