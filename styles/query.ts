export const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

export const query = Object.entries(breakpoints).reduce(
  (acc, [breakpoint, value]) => {
    acc[breakpoint] = `@media screen and (min-width: ${value})`;
    return acc;
    // eslint-disable-next-line no-use-before-define
  },
  {} as {
    [K in keyof typeof breakpoints]: `@media screen and (min-width: ${typeof breakpoints[K]})`;
  }
);
