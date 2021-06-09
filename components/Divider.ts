import styled from "styled-components";

export interface DividerProps {
  noMargin?: boolean;
}
export const Divider = styled.div<DividerProps>`
  height: 2px;
  background-color: ${({ theme }) => theme.color.back.medium};
  width: 100%;

  ${({ noMargin }) => !noMargin && "margin: 16px 0;"}
`;
