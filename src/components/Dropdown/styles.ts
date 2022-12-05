import { ACCENT_COLOR, WHITE_COLOR } from 'src/styles/constants'
import styled from 'styled-components'
// Types
import { SCDropdownTypes } from './Dropdown.interface'

export const SCDropdownContainer = styled.div<SCDropdownTypes>`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: ${({ isL1Open }) => (isL1Open ? '0' : '20px')};
`

export const SCDropdown = styled.div<SCDropdownTypes>`
  cursor: pointer;
  max-width: 100%;
  opacity: ${({ isL1Open }) => (isL1Open ? 0 : 1)};
  border-radius: 10px;
  background-color: ${WHITE_COLOR};
  height: 100%;
  padding: 10px;
  margin-bottom: 1rem;

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
