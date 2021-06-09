import React, { FC } from "react";
import { Link } from "../Link";
import { Nav } from "./style";

export const Menu: FC = () => (
  <Nav>
    <Link variant="highlighted" href="/all-articles">
      ALL ARTICLES
    </Link>
    <Link variant="highlighted" href="/about-me">
      WHO AND WHY
    </Link>
  </Nav>
);
