const About = () => {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            Back in 2016, I decided to try my hand at creating Facebook on my
            own with raw PHP and that was the moment I fell into coding and web
            development. Fast-forward to today, and I've had the privilege of
            building software for {" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://devskill.com/"
              target="_blank"
              rel="noreferrer"
            >
              DevSkill
            </a>
            , and{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.asthait.com/"
              target="_blank"
              rel="noreferrer"
            >
              ASTHA-IT.
            </a>            
          </p>
          <p className="mb-4">
          My main focus these days is building products and leading projects
            for our clients at{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.asthait.com/"
              target="_blank"
              rel="noreferrer"
            >
              ASTHA-IT
            </a>
            . In my free time, I contribute some open-source projects and try to
            learn something new from LinkedIn connections.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
