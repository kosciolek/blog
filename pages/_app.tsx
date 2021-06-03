import { AppProps } from "next/app";
import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { darkTheme } from "../styles/theme";
import "../styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
