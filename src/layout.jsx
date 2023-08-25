import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Project from "./Project";

const Layout = () => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Project />
            <div className="mt-20">
              Designed copied from{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://brittanychiang.com/"
              >
                <b className="text-slate-200">brittany chiang</b>
              </a>{" "}
              and coded in Visual Studio Code by yours truly. Built with React
              and Tailwind CSS, deployed with Vercel. All text is set in the
              Inter typeface.
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
