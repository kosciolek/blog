import React, { FC } from "react";
import { Link } from "../Link";
import { Nav } from "./style";

export const Menu: FC = () => (
  <Nav>
    <Link href="/all-articles">ALL ARTICLES</Link>
    <Link href="/about-me">WHO AND WHY</Link>
  </Nav>
);
