import { createGlobalStyle } from 'styled-components'
import { PRIMARY_COLOR } from 'styles/constants'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
    font-family: 'Maven pro';
    background-color: #d5dae5;
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

  // anything else you would like to include
`

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default BasicLayout
