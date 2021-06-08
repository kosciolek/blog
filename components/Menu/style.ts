import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  padding: 24px 0 48px;

  font-size: 13px;

  & > * + * {
    margin-left: 16px;
  }
`;
