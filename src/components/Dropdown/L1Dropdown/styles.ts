import { ACCENT_COLOR, WHITE_COLOR } from 'src/styles/constants'
import styled from 'styled-components'

export const L1DropdownContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  border-radius: 5px;
  background-color: ${WHITE_COLOR};
`

export const SCOption = styled.div`
  cursor: pointer;
  padding: 20px;

  &:active {
    color: ${ACCENT_COLOR};
  }
`
