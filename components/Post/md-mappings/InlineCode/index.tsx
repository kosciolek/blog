import React, { FC } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Code } from "./style";
import { codeTheme } from "../codeTheme";

export const InlineCode: FC<{ className: string }> = ({ children }) => (
  <>
    <Highlight
      {...defaultProps}
      code={children as string}
      language="javascript"
      theme={codeTheme}
    >
      {({
        className: classNameInner,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Code
          className={classNameInner}
          style={{
            ...style,
          }}
        >
          {tokens.map((line, lineIndex) => {
            // prism-react-renderer apparently wants to insert an empty newline at the end, this fixes it
            if (
              tokens.length - 1 === lineIndex &&
              (!line.length || line[0].empty)
            )
              return null;

            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={lineIndex}
                {...getLineProps({
                  line,
                  key: lineIndex,
                })}
                style={{ display: "inline" }}
              >
                {line.map((token, key) => (
                  <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={key}
                    {...getTokenProps({
                      token,
                      key,
                    })}
                  />
                ))}
              </div>
            );
          })}
        </Code>
      )}
    </Highlight>
  </>
);
