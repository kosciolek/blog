import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ size?: string }>`
  ${({ size }) =>
    size &&
    css`
      height: ${size};
      width: ${size};
    `}
`;
