import Head from 'next/head'
import { AppThemeProvider } from 'src/AppTheme'
import '~styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GDSC KWASU Blog</title>
        <meta name="theme-color" content="#0F9D58" />
        <link rel="icon" type="image" href="/images/gdsc.png" />
      </Head>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  )
}
