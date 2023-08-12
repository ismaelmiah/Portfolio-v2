const About = () => {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://us.mullenlowe.com/"
              target="_blank"
              rel="noreferrer"
            >
              advertising agency
            </a>
            , a{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://starry.com/"
              target="_blank"
              rel="noreferrer"
            >
              start-up
            </a>
            , a{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://scout.camd.northeastern.edu/"
              target="_blank"
              rel="noreferrer"
            >
              student-led design studio
            </a>
            , and a{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.apple.com/apple-music/"
              target="_blank"
              rel="noreferrer"
            >
              huge corporation
            </a>
            .
          </p>
          <p className="mb-4">
            My main focus these days is building products and leading projects
            for our clients at{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://upstatement.com/"
              target="_blank"
              rel="noreferrer"
            >
              Upstatement
            </a>
            . In my free time I've also released an{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.newline.co/courses/build-a-spotify-connected-app"
              target="_blank"
              rel="noreferrer"
            >
              online video course
            </a>{" "}
            that covers everything you need to know to build a web app with the
            Spotify API.
          </p>
          <p>
            When I’m not at the computer, I’m usually rock climbing, hanging out
            with my wife and two cats, or running around Hyrule searching for
            somethings
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
