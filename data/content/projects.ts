import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Emax European Bikes",
    desc: "European Best Bikes you can get.",
    img: "/static/projects/bike.png",
    link: "https://www.figma.com/proto/Lzx2X3ynk2mNJyUHykzPpX/Emax-Electric-Motorcycle?node-id=3-380&t=5u5GmBffdkaso6nY-1&scaling=scale-down-width&content-scaling=fixed",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "Cyber Punk",
    desc: "Beautiful Website templates ready-made for your next landing page.",
    img: "/static/projects/cyber-punk.png",
    link: "https://www.figma.com/proto/bugUyciveUkLLbsAv7Iuo4/Cyber.AI-Website?node-id=1-2&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Foodery",
    desc: "A Large Food Menu at your fingertips.",
    img: "/static/projects/food.png",
    link: "https://www.figma.com/proto/zyv2nGqqR4lNY2GPcNkm2a/Restaurant-Website?node-id=1-2&t=H1nJqo0B1XzMGiPB-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
    tags: ["React", "CSS", "Firebase"],
  },
  {
    id: 3,
    title: "Finance Management",
    desc: "All the resources you will need to get a boost in finance management.",
    img: "/static/projects/finance.png",
    link: "https://www.figma.com/proto/bt3YEEP4HegdgBmLQd4DFj/Capital-Vista---Finance-Landing-Page?node-id=209-761&t=PwwmXNfctTV1dCcP-1&scaling=scale-down-width&content-scaling=fixed",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Cars",
    desc: "Elevate Your Own Driving Power.",
    img: "/static/projects/cars.png",
    link: "https://www.figma.com/proto/d4lyYXKL7vvpToP1QVtp6U/STEELHORSE-TECHNONOLOGY?node-id=3-58&t=I551nHKLdbiETVuY-1&scaling=scale-down-width&content-scaling=fixed",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "Animal Products",
    desc: "Find the best products for your pets.",
    img: "/static/projects/dogs.png",
    link : "https://www.figma.com/proto/4mDOblvJT9h5RCCxgsOSJ3/Animal-Products-UI-UX--Community-?node-id=2-170&p=f&t=dBIbeJL2WSfqoZcs-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "Here We Got",
    desc: "A Custom website for your own Business",
    img: "/static/projects/here-we-got.png",
    link: "https://herewegot.ai/industries-we-service",
    tags: ["Javascript", "NPM"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
