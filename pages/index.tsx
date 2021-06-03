import { ReactNode } from "react";
import Comp from "./Comp.mdx";

export default function Home(): ReactNode {
  return (
    <div>
      Hello
      <div>
        <Comp />
      </div>
    </div>
  );
}
