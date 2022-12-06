import { ACCENT_COLOR, WHITE_COLOR } from 'src/styles/constants'
import styled from 'styled-components'
// Types
import { SCDropdownTypes } from './Dropdown.interface'

export const SCDropdownContainer = styled.div<SCDropdownTypes>`
  position: relative;
  display: flex;
  margin: ${({ isL1Open }) => (isL1Open ? '0' : '20px')};
`

export const SCDropdown = styled.div<SCDropdownTypes>`
  cursor: pointer;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${WHITE_COLOR};
  height: 100%;
  font-size: 24px;
  padding: 10px;
  font-weight: 500;
  opacity: ${({ isL1Open }) => (isL1Open ? 0 : 1)};

  &:active {
    color: ${ACCENT_COLOR};
  }
`

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`

export const SCDropdownBackdrop = styled.div`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`
