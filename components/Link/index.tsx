import { FC } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { A } from "./style";

export type LinkProps = Omit<NextLinkProps, "passHref">;

export const Link: FC<LinkProps> = ({ children, ...rest }) => (
  <NextLink {...rest}>
    <A>{children}</A>
  </NextLink>
);
