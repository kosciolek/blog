export const darkTheme = {
  color: {
    front: {
      main: "#86C232",
      dim: "#61892F",
      text: "#D9D9D9",
      highlight: "#D4E5BE",
    },
    back: {
      dark: "#222629",
      medium: "#474B4F",
      bright: "#6B6E70",
    },
    scrollbar: {
      shadow: "rgba(0, 0, 0, 0.3)",
      background: "#161616",
    },
  },
};

export type Theme = typeof darkTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
