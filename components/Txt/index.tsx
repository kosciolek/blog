import { FC } from "react";
import { Root } from "./style";
import { Theme } from "../../styles/theme";

export interface TxtProps {
  block?: boolean;
  color?: keyof Theme["color"]["front"] | string;
}

export const Txt: FC<TxtProps> = ({ children, block, color, ...rest }) => {
  return (
    <Root as={block ? "span" : undefined} color={color} {...rest}>
      {children}
    </Root>
  );
};
