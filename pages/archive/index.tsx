import Link from "next/link";

const projects = [
  {
    year: "2024-25",
    name: "RLDataCoach",
    company: "AIT",
    url: "https://rldatacoach.com",
    tech: ["Asp .NET 6.0", "Postgre SQL", "Lambda", "SQS", "NextJs"],
  },
  {
    year: "2024",
    name: "BrandShare",
    company: "Hogarth",
    url: "https://dellshare.com",
    tech: ["Asp .NET Framework", "MS SQL Server", "Redis", "AngularJS"],
  },
  {
    year: "2023-24",
    name: "Apex",
    company: "AIT",
    url: "https://apex4u.com",
    tech: ["Asp .NET 6.0", "MongoDB", "Redis", "Algolia", "React", "TypeScript"],
  },
  {
    year: "2022",
    name: "Global Aloha",
    company: "AIT",
    url: "https://www.punahou.edu/luke-center-for-public-service/programs-and-initiatives/global-aloha",
    tech: ["Angular", "Asp .Net Core Web API", "PostgreSQL"],
  },
  {
    year: "2022",
    name: "Transcom Digital",
    company: "AIT",
    url: "https://transcomdigital.com/",
    tech: ["Asp .Net Core", "MongoDB", "Redis", "AWS SQS", "Next JS"],
  },
  {
    year: "2021",
    name: "StrataSpot",
    company: "AIT", 
    url: "https://www.strataspot.com.au/",
    tech: ["Asp .Net Framework", "MSSQL", "JavaScript", "JQuery"],
  },
  {
    year: "2021",
    name: "Edu In Care",
    company: "Personal",
    tech: ["Asp .Net Core", "MSSQL", "JavaScript", "JQuery"],
  },
  {
    year: "2020",
    name: "Dev Track",
    company: "Dev Skill - Intern",
    tech: ["Asp .Net Core"],
  },
  {
    year: "2020",
    name: "Leave Management",
    company: "Personal",
    url: 'https://github.com/ismaelmiah/Leave-Management',
    tech: ["Asp .Net Core", "MSSQL", "JavaScript", "JQuery"],
  },
  {
    year: "2018",
    name: "Personal Website",
    company: "Personal",
    url: "https://sites.google.com/view/ismaelmiah/home",
    tech: ["Google Sites"],
    description: "Develop personal website using Google Sites",
  },
];

const Archive = () => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <Link
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Ismael Miah
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>
          <table id="content" className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr className="text-center">
                <th className="py-4 text-sm font-semibold text-slate-200 w-[100px]">
                  Year
                </th>
                <th className="py-4 text-sm font-semibold text-slate-200 w-[200px]">
                  Project
                </th>
                <th className="hidden py-4 text-sm font-semibold text-slate-200 lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4  text-sm font-semibold text-slate-200 lg:table-cell">
                  Technology
                </th>
                <th className="hidden py-4  text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pl-6 pr-4 align-top text-sm text-center">
                    <div className="translate-y-px">{project.year}</div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        {project.url ? (
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={project.name}
                          >
                            <span>
                              <span className="inline-block">
                                {project.description || project.name}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        ) : (
                          <span>{project.description || project.name}</span>
                        )}
                      </div>
                      <div className="hidden sm:block">
                        {project.description || project.name}
                      </div>
                    </div>
                  </td>
                  <td className="hidden py-4 pl-6 pr-4 align-top text-sm lg:table-cell  text-center">
                    <div className="translate-y-px whitespace-nowrap">
                      {project.company}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-2 align-top lg:table-cell">
                    <ul className="flex -translate-y-1.5 flex-wrap">
                      {project.tech.map((tech, techIndex) => (
                        <li key={techIndex} className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <ul className="translate-y-1">
                      {project.url && (
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="inline-block">
                              {new URL(project.url).host}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Archive;
