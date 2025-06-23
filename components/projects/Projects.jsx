import React from "react";
import projects from "@/data/content/projects.js";
import { kebabCase } from "@/utils/utils.js";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard.jsx";

function Projects({ overwriteProjects }) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
