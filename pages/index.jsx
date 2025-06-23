import CTA from "@/components/home/CTA.jsx";
import Hero from "@/components/home/Hero.jsx"
import Page from "@/components/utility/Page.jsx";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects.jsx";
import Skills from "@/components/home/Skills.jsx";
import Testimonials from "@/components/home/Testimonials.jsx";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Testimonials />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
