import { FC } from "react";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { Center } from "../Center";

export const StadardLayout: FC = ({ children }) => (
  <Center>
    <Menu />
    {children}
    <Footer />
  </Center>
);
