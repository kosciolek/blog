import { ComponentType } from "react";
import { MyMDXProvider } from "./components/Post/md-mappings/MyMDXProvider";
import { Post } from "./components/Post";
import { PageComponent } from "./types/PageComponent";
import { StadardLayout } from "./components/Layout";

export const makePost = ({
  default: Mdx,
  meta,
}: {
  default: ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: { [prop: string]: any };
}): ComponentType => {
  const component: PageComponent = () => (
    <MyMDXProvider>
      <Post
        mdx={Mdx}
        author={meta.author}
        date={meta.date}
        title={meta.title}
      />
    </MyMDXProvider>
  );

  component.Layout = StadardLayout;

  return component;
};
