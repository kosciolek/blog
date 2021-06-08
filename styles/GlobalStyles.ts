import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`${css`
  body {
    background-color: ${({ theme }) => theme.color.back.dark};
    color: ${({ theme }) => theme.color.front.text};
    font-family: "Lato", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`}`;
