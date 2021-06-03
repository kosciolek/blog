import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`${css`
  body {
    background-color: ${({ theme }) => theme.color.back.dark};
  }
`}`;
