import React from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { PageComponent } from "../types/PageComponent";
import { StandardLayout } from "../components/Layout";
import { getPostMetas } from "../utils-server/getPostMetas";
import { arrayDateToReadable } from "../utils/arrayDateToReadable";
import { Link } from "../components/Link";
import { PostMetaExtended } from "../types/PostMetaExtended";
import { Txt } from "../components/Txt";

export interface AllArticlesProps {
  metas: PostMetaExtended[];
}

export const Month = styled.div``;

export const MonthName = styled(Txt)`
  text-transform: uppercase;
`;

const AllArticles: PageComponent<AllArticlesProps> = ({ metas }) => (
  <>
    {metas.map(({ meta, name }) => (
      <Month key={name}>
        <MonthName>{arrayDateToReadable(meta.date, false)}</MonthName>
        <Link href={`/posts/${name}`}>{meta.title}</Link>
      </Month>
    ))}
  </>
);
export default AllArticles;

AllArticles.Layout = StandardLayout;

export const getStaticProps: GetStaticProps = async () => {
  const metas = await getPostMetas();

  return {
    props: { metas },
  };
};
