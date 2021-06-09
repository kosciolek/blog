import React, { FC } from "react";
import { Wrapper } from "./style";
import * as icons from "./icons";

export interface IconProps {
  size?: string;
  icon: keyof typeof icons;
}

export const Icon: FC<IconProps> = ({ size = "24px", icon }) => {
  const IconComponent = icons[icon];
  return (
    <Wrapper size={size}>
      <IconComponent />
    </Wrapper>
  );
};
