import styled, { css } from "styled-components";

// Constants
import { ACCENT_COLOR, BACKGROUND_COLOR, DANGER_COLOR, SECONDARY_COLOR, WHITE_COLOR } from "src/styles/constants";

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
        background-color: ${SECONDARY_COLOR};
      `
      if (variant === 'danger') 
      return css`
        background-color: ${DANGER_COLOR};
        color: ${WHITE_COLOR};
      `
  }
}
`
