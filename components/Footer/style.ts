import styled from "styled-components";
import { Link } from "../Link";

export const Root = styled.footer`
  display: flex;
  padding: 48px 0;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: 16px;
  }
`;

export const Copyright = styled.div`
  font-size: 11px;
  margin: 32px auto 0;
  opacity: 0.6;
`;

export const GithubLink = styled(Link)`
  margin-top: 32px;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 16px;
  align-self: stretch;
  justify-items: center;
`;
