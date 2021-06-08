import React, { ReactNode } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { promises as fsp } from "fs";
import TestPost, { meta } from "../posts/test-post.mdx";
import { Post } from "../components/Post";
import { MyMDXProvider } from "../components/Post/md-mappings/MyMDXProvider";
import { Menu } from "../components/Menu";

export interface BlogPostProps {}

export default function BlogPost(): ReactNode {
  return (
    <MyMDXProvider>
      <Menu />
      <Post mdx={TestPost} author={meta.author} date={meta.date} title={meta.title} />
    </MyMDXProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fsp.readdir("posts");
  console.log(posts);
  return {
    paths: posts.map(post => ({ params: { id: /^(.*)\./.exec(post)[1], filename: post } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async context => {
  const { id } = context.params;

  /*
  const blogPosts = await Promise.all(
    (await fg("pages/blog/!*.mdx", { stats: true })).map(async (file: IEntry) => {
      const { path, mtimeMs, birthtimeMs } = file;
      const filename = path.match(/blog\/(.*)+\.mdx/)[1];


      const meta: FrontMatter = (await import(`pages/blog/${filename}.mdx`)).frontMatter;

      return {
        url: `/blog/${filename}`,
        createdMs: birthtimeMs,
        editedMs: mtimeMs,
        ...meta
      };
    })
  );
  */

  return {
    props: {}
  };
};
