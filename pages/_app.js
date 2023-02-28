import Head from 'next/head'
import { AppThemeProvider } from 'src/AppTheme'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GDSC KWASU Blog</title>
        <link rel="icon" type="image" href="/images/gdsc.png" />
        <meta name="theme-color" content="#0F9D58" />
        <meta property="og:title" content="Blog | GDSC KWASU" key="ogtitle" />
        <meta
          property="og:description"
          content="Articles about our community's growth, progress, and sometimes setbacks will be here."
          key="ogdesc"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GDSC KWASU Blog" />
        <meta
          name="twitter:description"
          content="Articles about our community's growth, progress, and sometimes setbacks will be here."
        />
        <meta
          name="twitter:image"
          content="https://blog.gdsckwasu.club/ogimage.png"
        />
        <meta
          property="og:image"
          content="https://blog.gdsckwasu.club/ogimage.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://blog.gdsckwasu.club"
          key="ogsitename"
        />
        <meta
          name="google-site-verification"
          content="7o5JKuihVzZ45tmcTbl0-D89iFKXfy7eq7RAbyX8Rig"
        />
      </Head>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  )
}
