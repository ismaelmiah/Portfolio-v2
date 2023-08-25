const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="scroll-mt-16 md:mb-20 lg:mb-20 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2018 to Present"
                >
                  2021 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.asthait.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Software Engineer at Astha IT"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Software Engineer {" . "}
                          <span className="inline-block">ASTHA IT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-justify">
                    I've been a team lead at StrataSpot's live platform, where I
                    handle client stuff, figure out what we need to do, help out
                    the newbies, and even get my hands coding for feature
                    rollouts. I set up a super smooth way to develop and
                    integrate new stuff, like checking others' work and making
                    sure everything fits together. Also, I'm big on testing to
                    catch problems early. Over at Transcom Digital, I rocked
                    ReactJS, NextJs, .NET Core 3.1, and MongoDB.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-justify">
                    I made cool things happen, like making payments easy and
                    setting up discounts. I've also made a social media platform
                    for Hawai'i's Global Aloha project pop with Angular, .NET
                    Core 3.1, and PostgreSQL. I'm all about keeping things
                    agile, joining in planning sessions, daily check-ins, and
                    looking back to make things even better. And hey, I've been
                    recognized for being awesome at solving problems and giving
                    my all to the team.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Related links"
                  >
                    <li className="mr-4">
                      <a
                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://apex4u.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Apex</span>
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://www.strataspot.com.au/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>StrataSpot</span>
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://transcomdigital.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Transcom Digital</span>
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://www.punahou.edu/luke-center-for-public-service/programs-and-initiatives/global-aloha"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Global-Aloha</span>
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        C#
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Asp .Net Framework
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Asp .Net Core
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        .Net Web API
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        MSSQL
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
                        React
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="July to December 2017"
                >
                  December 2020 — January 2021
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.asthait.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Software Engineer Intern at Astha IT"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Software Engineer Internship {" . "}
                          <span className="inline-block">ASTHA IT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I collaborated with a development team to implement new
                    features that enhanced user experience. Using Git, I managed
                    code efficiently and promoted teamwork. I built projects
                    using React and Angular, including ecommerce and social
                    media apps. I showcased expertise in C#, .NET, and
                    integrated React into a personal project, highlighting
                    technical depth. I also effectively utilized Asp .NET-3.1
                    and MSSQL in practical projects, advancing my web
                    development skills.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Asp .Net Core
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        MSSQL
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        GIT
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
              aria-label="View Full Resume"
              href="/resume/Resume_Of_Ismael_Miah.pdf"
              target="_blank"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Resume
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
