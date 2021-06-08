import { ComponentType } from "react";
import { MyMDXProvider } from "./components/Post/md-mappings/MyMDXProvider";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";

export const makePost = ({ default: Mdx, meta }: { default: ComponentType; meta: any }): ComponentType => () => (
  <MyMDXProvider>
    <Menu />
    <Post mdx={Mdx} author={meta.author} date={meta.date} title={meta.title} />
  </MyMDXProvider>
);
