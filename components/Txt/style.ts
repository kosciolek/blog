import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const Root = styled.span<{
  color?: keyof Theme["color"]["front"] | string;
}>`
  font-size: 22px;
  color: ${({ color, theme }) =>
    theme.color.front[color] || color || "inherit"};
`;
