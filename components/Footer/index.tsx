import React, { FC } from "react";
import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { Link } from "../Link";
import { Copyright, GithubLink, Links, Root } from "./style";

const thisYear = new Date().getFullYear();
const copyrightDate = thisYear === 2021 ? "2021" : `2021 - ${thisYear}`;

export const Footer: FC = () => (
  <Root>
    <Divider noMargin />
    <Links>
      <Link href="/posts/test-post">Hello</Link>
      <Link href="/posts/test-post">Javascript sucks</Link>
      <Link href="/posts/test-post">Some other title</Link>
      <Link href="/posts/test-post">Titly title</Link>
    </Links>
    <Divider noMargin />
    <GithubLink
      variant="highlighted"
      href="https://github.com/kosciolek/blog"
      startIcon={<Icon icon="Github" color="currentColor" />}
    >
      View on github
    </GithubLink>
    <Copyright>© {copyrightDate} Juliusz Kościołek</Copyright>
  </Root>
);
