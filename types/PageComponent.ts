import { ComponentType, FC } from "react";

export interface PageComponent<PROPS = {}> extends FC<PROPS> {
  Layout?: ComponentType;
}
