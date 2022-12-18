import styled, { css } from 'styled-components'

// Constants
import { PRIMARY_COLOR, SECONDARY_COLOR, BACKGROUND_SECONDARY_COLOR } from '../../styles/constants'
// Types
import { IModalBackdrop } from './Modal.interface'

export const SCModalContainer = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${BACKGROUND_SECONDARY_COLOR};
  border-radius: 10px;
  width: 450px;
  max-height: 200px;
  height: auto;
  opacity: 1;
  box-shadow: 2px 2px 8px ${SECONDARY_COLOR};
  z-index: 4;
`

export const SCModalTitle = styled.h1`
  display: flex;
  height: auto;
  margin: 0;
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
`

export const SCModalText = styled.p`
  display: flex;
  height: auto;
  text-align: center;
`

export const SCModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 10px;
  width: 100%;
`

export const SCModalBackdrop = styled.div<IModalBackdrop>`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  opacity: 0.3;
  background: ${PRIMARY_COLOR};
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
`
