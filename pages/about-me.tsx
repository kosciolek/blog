import React from "react";
import { PageComponent } from "../types/PageComponent";
import { StandardLayout } from "../components/Layout";

const AboutMe: PageComponent = () => (
  <>
    <div>Hello</div>
  </>
);

AboutMe.Layout = StandardLayout;

export default AboutMe;
