const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          I started my professional career at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.asthait.com/"
            target="_blank"
            rel="noreferrer"
          >
            ASTHA-IT.
          </a>
          , tackling real-world problems with technology. Alongside my job, I
          completed a remote internship at {""}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://devskill.com/"
            target="_blank"
            rel="noreferrer"
          >
            DevSkill
          </a>
          , which was a pivotal experience that enhanced my skills during my
          first year at ASTHA-IT. Lastly, I joined{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.hogarth.com/"
            target="_blank"
            rel="noreferrer"
          >
            Hogarth
          </a>{" "}
          in early 2024, and after that, I moved to London, United Kingdom, for
          my studies.
        </p>
        <p className="mb-4">
          I love sharing web development insights with the Dev Community on{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.linkedin.com/in/ismaelmiah/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://devismael.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Substack
          </a>{" "}
          platform. Outside of work, I&apos;m an avid chess player—feel free to
          check out my profile on Lichess:{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://lichess.org/@/ismailhosen"
            target="_blank"
            rel="noreferrer"
          >
            lichess.org/@/ismailhosen
          </a>
          .{" "}
        </p>{" "}
        <p className="mb-4 text-justify">
          {" "}
          Open to <b className="font-medium text-slate-200">part-time</b> or <b className="font-medium text-slate-200">contract</b> roles where I can make a
          difference, grow, and keep evolving.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
          Skill Sets
        </h2>
        <div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                C#
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Asp .NET MVC
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Asp .NET Web API
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                TypeScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Next JS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                MSSQL Server
              </div>
            </li>
            {/* <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PostgreSQL
              </div>
            </li> */}
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                MongoDB
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Redis
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                AWS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                EC2
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                S3
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                ELB
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                ASG
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Lambda
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                SQS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                SNS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Git
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                RESTful APIs
              </div>
            </li>
            {/* <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                GraphQL
              </div>
            </li> */}
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Docker
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Micro-Services
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Kafka
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Nginx (Reverse-Proxy)
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Design Principles
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Multi-Threading
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
