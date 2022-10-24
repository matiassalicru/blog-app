import { createGlobalStyle } from 'styled-components'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from 'src/styles/constants'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
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
