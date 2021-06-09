import styled, { css } from "styled-components";

export const A = styled.a<{ variant: "normal" | "highlighted" }>`
  color: ${({ theme }) => theme.color.front.main};
  cursor: pointer;
  text-decoration: none;

  ${({ variant }) =>
    variant === "highlighted" &&
    css`
      text-transform: uppercase;
      padding: 4px 8px;
      font-weight: bold;
      user-select: none;

      &:hover {
        color: white;
        background-color: ${({ theme }) => theme.color.front.main};
      }
    `}

  ${({ variant }) =>
    variant === "normal" &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
  
  
  transition: background-color 250ms, color 250ms;
`;
