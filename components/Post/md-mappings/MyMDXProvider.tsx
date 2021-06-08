import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./CodeBlock";
import { H1, H2, H3, H4, H5, H6 } from "./mappings";
import { Link } from "./Link";

export const MyMDXProvider: FC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        code: CodeBlock,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        a: Link
      }}
    >
      {children}
    </MDXProvider>
  );
};
