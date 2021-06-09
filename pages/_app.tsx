import { AppProps } from "next/app";
import React, { FC, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { darkTheme } from "../styles/theme";
import "normalize.css/normalize.css";
import { PageComponent } from "../types/PageComponent";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme] = useState(darkTheme);
  const PageComp = Component as PageComponent;
  const withMaybeLayout = PageComp.Layout ? (
    <PageComp.Layout {...pageProps}>
      <PageComp {...pageProps} />
    </PageComp.Layout>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {withMaybeLayout}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
