import styled from "styled-components";
import { ACCENT_COLOR, SECONDARY_COLOR } from "src/styles/constants";

export const SCButtonComponent = styled.button`
  border: 1px solid ${SECONDARY_COLOR};
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
  background-color: ${ACCENT_COLOR};
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
`
