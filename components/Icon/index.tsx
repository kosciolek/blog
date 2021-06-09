import React, { FC } from "react";
import { Wrapper } from "./style";
import * as icons from "./icons";
import { Theme } from "../../styles/theme";

export interface IconProps {
  size?: string;
  icon: keyof typeof icons;
  color?: keyof Theme["color"]["front"] | string;
}

export const Icon: FC<IconProps> = ({
  size = "24px",
  icon,
  color = "inherit"
}) => {
  const IconComponent = icons[icon];
  return (
    <Wrapper color={color} size={size}>
      <IconComponent />
    </Wrapper>
  );
};
