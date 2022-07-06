import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "styles/constants";

export const SCButtonComponent = styled.button`
  border: 1px solid ${SECONDARY_COLOR};
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
  background-color: ${PRIMARY_COLOR};
  cursor: pointer;
  width: fit-content;
  box-shadow: 2px 2px 5px ${SECONDARY_COLOR};
  font-weight: 500;
  letter-spacing: 2px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px ${SECONDARY_COLOR};
  }
`
