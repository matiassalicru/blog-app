import styled from "styled-components";

// Constants
import { PRIMARY_COLOR } from "styles/constants";

export const SCDashboardContainer = styled.div`
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
export const SCDashboardTitle = styled.h1`
  color: mediumslateblue;
  font-size: 2rem;
`

export const SCSeparator = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${PRIMARY_COLOR};
  margin: 0;
`