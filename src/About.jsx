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
          <p className="mb-4 text-justify">
            A few years back, I decided to try my hand at establishing Facebook
            on my own using raw PHP, and that was the moment I fell into coding
            and web development, even if I couldn't finish that project. Fast
            forward to now, and I've had the pleasure of developing software for{" "}
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
          <p className="mb-4 text-justify">
            I also like sharing content in{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.linkedin.com/in/ismaelmiah/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            related to the stuff that I have learned over the years in Web
            Development so it can help other people of the Dev Community.
          </p>
          <p className="mb-4 text-justify">
            I'm interested in{" "}
            <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
              Part-Time
            </b>{" "}
            employment options where I can grow, contribute, and learn. If you
            have a fantastic opportunity that matches my talents and expertise,
            please do not hesitate to contact me. In my free time, I contribute
            some open-source projects and try to learn something new from
            LinkedIn connections.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Skill Sets</h2>
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
                Multi-Threading
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
                  JQuery
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  React
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  MSSQL Server
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  PostgreSQL
                </div>
              </li>
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
                  Amazon RDS
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Amazon DynamoDB
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Git
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Github
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Bitbucket
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  RESTful APIs
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  GraphQL
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  OOP
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Design Principles
                </div>
              </li>
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
                  AWS (CI/CD, ELB, ASG)
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Nginx (Reverse-Proxy)
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                3rd Party Integration
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Jira
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Agile Methodologies
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
