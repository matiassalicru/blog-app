import React, { useState } from 'react'
// Types
import { IDropdown } from './Dropdown.interface'
// Components
import { L1Dropdown } from './L1Dropdown/L1Dropdown'
// Styles
import { SCDropdownContainer, SCDropdown, SCDropdownBackdrop } from './styles'

export const Dropdown = ({ options }: IDropdown) => {
  const [isL1Open, setIsL1Open] = useState(false)

  const toggleL1Dropdown = () => {
    setIsL1Open(open => !open)
  }

  const closeDropdown = () => {
    setIsL1Open(false)
  }

  return (
    <>
      <SCDropdownContainer isL1Open={isL1Open}>
        <SCDropdown onClick={toggleL1Dropdown} isL1Open={isL1Open}>
          Menu
        </SCDropdown>
        {isL1Open && <L1Dropdown options={options} />}
      </SCDropdownContainer>
      {isL1Open && <SCDropdownBackdrop onClick={closeDropdown} data-testid="modal-backdrop" />}
    </>
  )
}
