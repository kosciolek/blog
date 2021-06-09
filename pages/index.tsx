import React, { ReactNode } from "react";
import TestPost, { meta } from "../posts/test-post.mdx";
import { Post } from "../components/Post";
import { MyMDXProvider } from "../components/Post/md-mappings/MyMDXProvider";

export default function Home(): ReactNode {
  return (
    <MyMDXProvider>
      <Post
        mdx={TestPost}
        author={meta.author}
        date={meta.date}
        title={meta.title}
      />
    </MyMDXProvider>
  );
}
