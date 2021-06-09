import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkPropsType } from "next/link";
import { A } from "./style";

export type LinkProps = {
  variant?: "normal" | "highlighted";
  NextLinkProps?: Omit<NextLinkPropsType, "passHref">;
  startIcon?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: FC<LinkProps> = ({
  children,
  variant,
  NextLinkProps,
  href,
  startIcon,
  ...rest
}) => (
  <NextLink href={href} passHref {...NextLinkProps}>
    <A variant={variant} {...rest}>
      {startIcon && <div style={{ marginRight: "8px" }}>{startIcon}</div>}
      {children}
    </A>
  </NextLink>
);

Link.defaultProps = {
  variant: "normal",
};
