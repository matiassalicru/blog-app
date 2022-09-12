import styled from "styled-components";

// Constants
import { ACCENT_COLOR } from "styles/constants";

export const SCDashboardContainer = styled.div`
  position: relative;
  width: 60%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 50px 100px;
  padding: 20px;
`
export const SCButtonContainer = styled.h1`
  position: absolute;
  top: 0px;
  right: 30px;
`

export const SCSeparator = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${ACCENT_COLOR};
  margin: 0;
`

export const SCNavDashboard = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`

export const SCDashTitle = styled.h1`
  font-size: 42px;
`

