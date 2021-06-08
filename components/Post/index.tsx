import React, { ComponentType, FC } from "react";
import { Author, Main, Subtitle, Title } from "./style";

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
        by <Author>{author}</Author> at {date}
      </Subtitle>
    </div>
    <Mdx />
  </Main>
);
