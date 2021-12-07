import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after  {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#0F9D58',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
