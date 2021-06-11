import React, { FC } from "react";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { Center } from "../Center";
import { Main } from "./style";

export const StandardLayout: FC = ({ children }) => (
  <Center
    style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
  >
    <Menu />
    <Main>{children}</Main>
    <Footer />
  </Center>
);
