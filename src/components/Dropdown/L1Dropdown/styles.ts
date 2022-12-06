import styled from 'styled-components'
// Constants
import { ACCENT_COLOR, WHITE_COLOR } from '../../../styles/constants'

export const L1DropdownContainer = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  border-radius: 5px;
  background-color: ${WHITE_COLOR};
`

export const SCOption = styled.div`
  cursor: pointer;
  padding: 40px;
  font-size: 24px;
  font-weight: 500;
  &:active {
    color: ${ACCENT_COLOR};
  }

  &:first-child {
    border-bottom: 1px solid ${ACCENT_COLOR};
  }
`
