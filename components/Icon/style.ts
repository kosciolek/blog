import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

export const Wrapper = styled.div<{
  size: string;
  color?: keyof Theme["color"]["front"] | string;
}>`
  color: ${props => props.theme.color.front[props.color] || props.color};
  fill: currentColor;

  ${({ size }) =>
    size &&
    css`
      height: ${size};
      width: ${size};
    `}
`;
