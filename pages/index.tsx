import About from "./about";
import Certifications from "./certifications";
import Experience from "./experience";
import Project from "./projects";

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Project />
      <Certifications />
      <div className="mt-20">
        A copied design and coded in Visual Studio Code by myself truly. Built
        with NextJs and Tailwind CSS, deployed with Netlify.
      </div>
    </>
  );
}
