import { createGlobalStyle } from 'styled-components'
// Types
import { FunctionComponent } from 'react'
// Constants
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../styles/constants'

export const GlobalStyle = createGlobalStyle`
    // this is the shared styles
  html {
    box-sizing: border-box;
    font-family: 'Maven pro';
    background-color: ${BACKGROUND_COLOR};
    color: ${PRIMARY_COLOR};
  }

  body {
    margin: 0 !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

`

export const BasicLayout: FunctionComponent<{ children: any }> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
