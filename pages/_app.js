import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC KWASU Blog</title>
        <meta name="theme-color" content="#4285f4" />
        <link rel="icon" type="image" href="/img/gdsc.png" />
      </Head>
      <Component {...pageProps} />;
    </React.Fragment>
  );
}

export default MyApp;
