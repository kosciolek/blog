import { ComponentType } from "react";
import { MyMDXProvider } from "./components/Post/md-mappings/MyMDXProvider";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { Footer } from "./components/Footer";

export const makePost =
  ({
    default: Mdx,
    meta,
  }: {
    default: ComponentType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta: { [prop: string]: any };
  }): ComponentType =>
  () =>
    (
      <MyMDXProvider>
        <Menu />
        <Post
          mdx={Mdx}
          author={meta.author}
          date={meta.date}
          title={meta.title}
        />
        <Footer />
      </MyMDXProvider>
    );
