import Heading from "components/projects/Heading.jsx";
import More from "components/projects/More.jsx";
import Page from "components/utility/Page.jsx";
import Projects from "components/projects/Projects.jsx";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
