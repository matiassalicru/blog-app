import styled, { css, keyframes } from 'styled-components'
// Utils
import { device } from '../../utils/contants'
// Types
import { IAlertStyles } from './Alert.interface'
// Constants
import {
  ACCENT_COLOR,
  WHITE_COLOR,
  DANGER_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  SECONDARY_COLOR,
  PRIMARY_COLOR,
} from '../../styles/constants'

export const SCIconContainer = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  margin: 0 8px;
`

export const SCAlertText = styled.div`
  display: flex;
  font-size: 16px;
`

const insideOut = keyframes`
  0%{
    bottom: -40px;
    opacity: 0.2;
  }

  10% {
    bottom: 30px;
    opacity: 0.8;
  }

  15% {
    bottom: 25px;
    opacity: 1;
  }

  20% {
    bottom: 30px;
    opacity: 1;
  }

  60% {
    opacity: 1;
    bottom: 30px;
  }

  80% {
    bottom: 25px;
    opacity: 0.7;
  }


  90% {
    bottom: 20px;
    opacity: 0.4;

  }

  100% {
    bottom: -40px;
    opacity: 0;
  }
`

export const SCContainer = styled.div<IAlertStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 32px;
  border: 0;
  box-shadow: ${BACKGROUND_SECONDARY_COLOR} 0px 7px 40px 0px;
  text-transform: uppercase;
  padding: 32px 24px;
  font-size: 12px;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  animation: ${insideOut} ${({ animationTime }) => `${animationTime}s`} ease-in normal;

  ${({ variant }) => {
    if (variant === 'primary')
      return css`
        background-color: ${ACCENT_COLOR};
      `

    if (variant === 'secondary')
      return css`
        background-color: ${BACKGROUND_SECONDARY_COLOR};
        color: ${PRIMARY_COLOR}
        box-shadow: 2px 2px 2px 1px ${SECONDARY_COLOR};
      `

    if (variant === 'danger')
      return css`
        background-color: ${DANGER_COLOR};
        color: ${WHITE_COLOR};
      `

    return css`
      background-color: ${BACKGROUND_SECONDARY_COLOR};
      color: ${PRIMARY_COLOR};
    `
  }};

  @media ${device.laptop} {
    width: 80%;
  }
`
