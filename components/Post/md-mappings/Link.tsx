import { FC } from "react";
import NextLink from "next/link";
import styled from "styled-components";

const A = styled.a`
  color: ${({ theme }) => theme.color.front.main};
  text-decoration: none;

  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link: FC<{ href: string }> = ({ href, children }) => (
  <NextLink passHref href={href}>
    <A>{children}</A>
  </NextLink>
);
