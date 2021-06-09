import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

export const Wrapper = styled.div<{
  size?: string;
  color?: keyof Theme["color"]["front"] | string;
}>`
  fill: ${props => props.theme.color.front[props.color] || props.color};

  ${({ size }) =>
    size &&
    css`
      height: ${size};
      width: ${size};
    `}
`;
