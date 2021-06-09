import { createGlobalStyle, css } from "styled-components";
import { bodyOverflowHiddenClass } from "./const";

export const GlobalStyles = createGlobalStyle`${css`
  body {
    background-color: ${({ theme }) => theme.color.back.dark};
    color: ${({ theme }) => theme.color.front.text};
    font-family: "Lato", sans-serif;

    overflow-y: scroll;

    &.${bodyOverflowHiddenClass} {
      overflow: hidden;
    }
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

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.color.scrollbar.shadow};
    background-color: ${({ theme }) => theme.color.scrollbar.background};
  }

  *::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.front.dim};
    //border: 2px solid #555555;
  }
`}`;
