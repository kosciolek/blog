import { FC } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { A } from "./style";

export type LinkProps = { variant?: "normal" | "highlighted" } & Omit<
  NextLinkProps,
  "passHref"
>;

export const Link: FC<LinkProps> = ({ children, variant, ...rest }) => (
  <NextLink {...rest}>
    <A variant={variant}>{children}</A>
  </NextLink>
);

Link.defaultProps = {
  variant: "normal",
};
