import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "~styles/globals.css";

const theme = {
  colors: {
    primary: "#0F9D58",
    primary_dim: "#D9E7FD;",
    secondary: "#CFEBDE",
    gold: "#FBBC04",
    black: "#202020",
    badge: "#EA4335",
    white: "#fff",
    dark_dim: "#797979 ",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GDSC KWASU Blog</title>
        <meta name="theme-color" content="#0F9D58" />
        <link rel="icon" type="image" href="/images/gdsc.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
