import { ComponentType, FC } from "react";

export interface PageComponent<PROPS = Record<string, unknown>>
  extends FC<PROPS> {
  Layout?: ComponentType;
}
