import React from 'react'
// Types
import { IDropdown } from '../Dropdown.interface'
// Styles
import { L1DropdownContainer, SCOption } from './styles'

export const L1Dropdown = ({ options }: IDropdown) => {
  return (
    <L1DropdownContainer data-testid="l1-dropdown-container">
      {options.map(({ id, name, onClick }) => (
        <SCOption key={id} onClick={onClick}>
          {name}
        </SCOption>
      ))}
    </L1DropdownContainer>
  )
}
