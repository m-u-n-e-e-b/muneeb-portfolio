import Heading from "components/designs/Heading.jsx";
import More from "components/designs/More.jsx";
import Page from "components/utility/Page.jsx";
import Projects from "components/designs/Designs.jsx";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default designs;
