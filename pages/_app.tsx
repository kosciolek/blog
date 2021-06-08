import { AppProps } from "next/app";
import React, { FC, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { darkTheme } from "../styles/theme";
import "../styles/global.css";
import { Center } from "../components/Center";


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme] = useState(darkTheme);
  console.log(Component, pageProps);
  console.log('APP')
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
        <Center>
          <Component {...pageProps} />
        </Center>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
