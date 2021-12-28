import { createContext, useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const THEME_STORAGE_KEY = 'theme'
export const AppThemeContext = createContext(null)

const THEME = {
  light: {
    colorBG: '#ffffff',
    colorFG: '#202020',

    headerBG: '#ffffff',
    headerFG: '#676c73',

    headerSectionBG: '#CFEBDE',
    headerSectionFG: '#202020',

    headerCardBG: '#FFFFFF',
    headerCardFG: '#202020',
    headerPrimaryFG: '#202020',
    headerAltFG: '#202020',
    headerCardShadowColor: 'rgba(0, 0, 0, 0.04)',

    footerBG: '#202020',
    footerFG: '#FFFFFF',

    cardBadgeBG: '#EA4335',
    cardBadgeFG: '#FFFFFF',

    cardBG: '#FFFFFF',
    cardFG: '#202020',
    cardHeaderBG: '#FFFFFF',
    cardHeaderFG: '#797979',
    cardAltFG: '#797979',
    cardPrimaryFG: '#202020',
    cardShadowColor: 'rgba(0, 0, 0, 0.04)',

    communitySectionFG: '#202020',
    communitySectionPrimary: '#0F9D58',
    communitySectionPrimaryFG: '#F6F6F6',

    blogShareFG: '#0F9D58',
    blogShareAltFG: '#797979',
    blogPrimaryFG: '#0F9D58',
    blogFG: '#4D4D4D',
    blogAltFG: '#e0e0e0',
    blogTagFG: '#797979',
    blogFigureFG: '#808080',
    blogAuthorFG: '#4d4d4d',

    chipBG: '#CFEBDE',
    chipFG: '#202020',
  },

  dark: {
    colorBG: '#121212',
    colorFG: '#dedede',

    headerBG: '#0e0e0e',
    headerFG: '#ababab',

    headerSectionBG: '#252525',
    headerSectionFG: '#80deb1',

    headerCardBG: '#0a0a0a',
    headerCardFG: '#b3b3b3',
    headerPrimaryFG: '#5d9a7d',
    headerAltFG: '#5f5f5f',
    headerCardShadowColor: 'rgba(0, 0, 0, 0.04)',

    footerBG: '#080808',
    footerFG: '#799c8b',

    cardBadgeBG: '#ce7f78',
    cardBadgeFG: '#080808',

    cardBG: '#0a0a0a',
    cardFG: '#b3b3b3',
    cardHeaderBG: '#0a0a0a',
    cardHeaderFG: '#b3b3b3',
    cardAltFG: '#5f5f5f',
    cardPrimaryFG: '#5d9a7d',
    cardShadowColor: 'rgba(0, 0, 0, 0.04)',

    communitySectionFG: '#b3b3b3',
    communitySectionPrimary: '#5d9a7d',
    communitySectionPrimaryFG: '#151515',

    blogShareFG: '#5d9a7d',
    blogShareAltFG: '#797979',
    blogPrimaryFG: '#5d9a7d',
    blogFG: '#b3b3b3',
    blogAltFG: '#4c4c4c',
    blogTagFG: '#797979',
    blogFigureFG: '#636363',
    blogAuthorFG: '#4d4d4d',

    chipBG: '#4c5651',
    chipFG: '#c1c1c1',
  },
}

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }
  
  body {
    background: ${({ theme }) => theme.colors.colorBG};
    color: ${({ theme }) => theme.colors.colorFG};
  }
`

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

    const themeMode =
      localTheme ||
      ('matchMedia' in window &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        'dark') ||
      'light'

    setTheme(themeMode)
  }, [setTheme])

  const themeMode = (theme && theme in THEME && theme) || 'light'

  return (
    <AppThemeContext.Provider value={{ themeMode, setThemeMode: setTheme }}>
      <ThemeProvider theme={{ colors: THEME[themeMode] }}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
