import React, { FC, Fragment, useCallback, useRef, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import {
  Divider,
  Filename,
  Header,
  IconContainer,
  LineNumber,
  Pre,
  Wrapper,
} from "./style";
import { Icon } from "../../../Icon";
import { Button } from "../../../Button";
import { useBodyOverflow } from "../../../../hooks/useBodyOverflow";
import { useHotkey } from "../../../../hooks/useHotkey";

export type CodeBlockMeta = {
  filename: string;
};

export type CodeBlockProps = { className: string } & CodeBlockMeta;

export const CodeBlock: FC<CodeBlockProps> = ({
  children,
  className,
  filename,
}) => {
  const language = className.replace(/language-/, "") as Language;

  const { setScroll, setHidden } = useBodyOverflow();

  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const [[placeholderWidth, placeholderHeight], setPlaceholder] = useState([
    0, 0,
  ]);

  const [fullscreen, setFullscreen] = useState(false);
  const closeFullscreen = useCallback(() => {
    setScroll();
    setFullscreen(false);
  }, [setScroll, setFullscreen]);
  const openFullscreen = () => {
    const { width, height } = wrapperRef.current?.getBoundingClientRect();
    setPlaceholder([width, height]);
    setHidden();
    setFullscreen(true);
  };
  const toggleFullscreen = () => {
    if (fullscreen) closeFullscreen();
    else openFullscreen();
  };

  useHotkey(
    "Escape",
    useCallback(() => closeFullscreen(), [closeFullscreen])
  );

  const copyToClipboard = async () =>
    navigator.clipboard.writeText(children as string);

  return (
    <>
      {fullscreen && (
        <div
          style={{
            width: `${placeholderWidth}px`,
            height: `${placeholderHeight}px`,
          }}
        />
      )}
      <Wrapper ref={wrapperRef} fullscreen={fullscreen}>
        {filename && (
          <>
            <Header>
              <Filename>{filename}</Filename>
              <IconContainer>
                <Button onClick={copyToClipboard}>
                  <Icon size="22px" icon="Copy" />
                </Button>
                <Button onClick={toggleFullscreen}>
                  <Icon icon={fullscreen ? "FullscreenExit" : "Fullscreen"} />
                </Button>
              </IconContainer>
            </Header>
            <Divider />
          </>
        )}
        <Highlight
          {...defaultProps}
          code={children as string}
          language={language}
          theme={dracula}
        >
          {({
            className: classNameInner,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <Pre
              className={classNameInner}
              style={{
                ...style,
                padding: "0 16px 16px 16px",
                overflowX: "auto",
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
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={lineIndex}>
                    <LineNumber>{lineIndex}</LineNumber>
                    <div
                      {...getLineProps({ line, key: lineIndex })}
                      style={{ paddingRight: "16px" }}
                    >
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
    </>
  );
};
