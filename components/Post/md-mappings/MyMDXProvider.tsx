import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./CodeBlock";
import { H1, H2, H3, H4, H5, H6, P } from "./mappings";
import { Link } from "./Link";
import { InlineCode } from "./InlineCode";
import { Img } from "./Img";

export const MyMDXProvider: FC = ({ children }) => (
  <MDXProvider
    components={{
      code: CodeBlock,
      inlineCode: InlineCode,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      a: Link,
      img: Img,
    }}
  >
    {children}
  </MDXProvider>
);
