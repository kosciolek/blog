import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Root } from "./style";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...rest }, ref) => <Root ref={ref} {...rest} />
);
