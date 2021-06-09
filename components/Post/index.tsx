import React, { ComponentType, FC } from "react";
import { Date, Highlighted, Main, Subtitle, Title } from "./style";

export interface PostProps {
  title: string;
  author: string;
  date: string;
  mdx: ComponentType;
}

export const Post: FC<PostProps> = ({ author, date, mdx: Mdx, title }) => (
  <Main>
    <div style={{ marginBottom: "32px" }}>
      <Title>{title}</Title>
      <Subtitle>
        by{" "}
        <Highlighted>
          <strong>{author}</strong>
        </Highlighted>{" "}
        at{" "}
        <Date>
          <b>{date}</b>
        </Date>
      </Subtitle>
    </div>
    <Mdx />
  </Main>
);
