import React, { FC, Fragment } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import { Divider, Filename, Header, LineNumber, Pre, Wrapper } from "./style";

export type CodeBlockMeta = {
  filename: string;
};

export type CodeBlockProps = { className: string } & CodeBlockMeta;

export const CodeBlock: FC<CodeBlockProps> = ({ children, className, filename }) => {
  const language = className.replace(/language-/, "") as Language;

  return (
    <Wrapper>
      {filename && (
        <>
          <Header>
            <Filename>{filename}</Filename>
          </Header>
          <Divider />
        </>
      )}
      <Highlight {...defaultProps} code={children as string} language={language} theme={dracula}>
        {({ className: classNameInner, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={classNameInner} style={{ ...style, padding: "0 16px 16px 16px", overflowX: "auto" }}>
            {tokens.map((line, lineIndex) => {
              // prism-react-renderer apparently wants to insert an empty newline at the end, this fixes it
              if (tokens.length - 1 === lineIndex && (!line.length || line[0].empty)) return null;

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={lineIndex}>
                  <LineNumber>{lineIndex}</LineNumber>
                  <div {...getLineProps({ line, key: lineIndex })} style={{ paddingRight: "16px" }}>
                    {line.map((token, key) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </Fragment>
              );
            })}
          </Pre>
        )}
      </Highlight>
    </Wrapper>
  );
};
