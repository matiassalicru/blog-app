import styled from 'styled-components'

// Constants
import { ACCENT_COLOR, WHITE_COLOR } from '../../styles/constants'

export const SCDashboardContainer = styled.div`
  background-color: ${WHITE_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0 2px 5px ${WHITE_COLOR};
  padding: 20px;
`

export const SCButtonContainer = styled.h1`
  position: fixed;
  bottom: 0px;
  right: 24px;
`

export const SCSeparator = styled.div`
  width: auto;
  height: 1px;
  background-color: ${ACCENT_COLOR};
  margin: 0 20px;
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

export const SCPostContainer = styled.div`
  width: 100%;
`
