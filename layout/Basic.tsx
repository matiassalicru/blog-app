import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #c8d7f980;
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
