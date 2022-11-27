import styled, { css } from "styled-components";

// Constants
import { ACCENT_COLOR, BACKGROUND_SECONDARY_COLOR, DANGER_COLOR, SECONDARY_COLOR, WHITE_COLOR, BACKGROUND_COLOR } from '../../styles/constants';

// Types
import { IButtonStyles } from "./Button.interface";

export const SCButtonComponent = styled.button<IButtonStyles>`
  border: 1px solid ${SECONDARY_COLOR};
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  box-shadow: 2px 2px 2px 1px ${SECONDARY_COLOR};
  font-weight: 500;
  letter-spacing: 2px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 3px ${SECONDARY_COLOR};
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px ${SECONDARY_COLOR};
  }

  &:disabled {
    background-color: ${SECONDARY_COLOR};
    cursor: not-allowed;
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 3px ${SECONDARY_COLOR};
  }

  ${({ variant }) => {

    if (variant === 'primary') 
      return css`
        background-color: ${ACCENT_COLOR};
      `

    if (variant === 'secondary') 
      return css`
        background-color: ${BACKGROUND_SECONDARY_COLOR};
        box-shadow: 2px 2px 2px 1px ${SECONDARY_COLOR};
      `

    if (variant === 'danger') 
    return css`
      background-color: ${DANGER_COLOR};
      color: ${WHITE_COLOR};
    `

    if (variant === 'roundedIcon')
    return css`
      background-color: ${ACCENT_COLOR};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      border-color: ${BACKGROUND_COLOR};

      &:hover {
        transform: translate(-4px, -4px);
        box-shadow: 4px 4px 13px ${ACCENT_COLOR};
      }
    `
  }
}
`
