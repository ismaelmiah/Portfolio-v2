import Image from "next/image";
import Link from "next/link";

// Reusable components
const TechBadge = ({ name }: { name: string }) => (
  <li className="mr-1.5 mt-2">
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {name}
    </div>
  </li>
);

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
    <span>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </a>
);

interface ExperienceItem {
  period: string;
  company: string;
  logo: string;
  role: string;
  companyUrl: string;
  description: string[];
  technologies: string[];
  relatedLinks?: Array<{ name: string; url: string }>;
}

const experiences: ExperienceItem[] = [
  {
    period: "November 2024 — Present",
    company: "AIT",
    logo: "/images/experiences/ait.jpg",
    role: "Software Engineer (Remote - Part Time)",
    companyUrl: "https://ait.inc",
    description: [
      "Shipping new coaching features for RLDataCoach while refining the aws architecture—autoscaling seamlessly and <b>trimming cloud spend by 45%</b>."
    ],
    technologies: ["Python", "C#", "Asp .Net", ".Net Web API", "Redis", "PostgreSQL", "NextJS", "AWS"]
  },
  {
    period: "March 2024 — August 2024",
    company: "Hogarth",
    logo: "/images/experiences/hogarth.png",
    role: "Software Engineer",
    companyUrl: "https://www.hogarth.com/",
    description: [
      "<b>Engineered scalable software solutions</b> for a marketing tool used by clients like Dell, Ford, Nestlé, and Colgate, improving workflow efficiency by 20%.",
      "Responsible for implementing enhancements and fixes while maintaining codebase consistency and <b>optimizing queries</b> for large production data."
    ],
    technologies: ["C#", "Asp .Net", "Angular", ".Net Web API", "MS SQL", "Angular"]
  },
  {
    period: "January 2023 — February 2024",
    company: "AIT",
    logo: "/images/experiences/ait.jpg",
    role: "Software Engineer",
    companyUrl: "https://ait.inc",
    description: [
      "<b>Led client communication and requirements analysis </b> for key projects, managing project timelines, and mentoring junior developers, resulting in a 25% reduction in feature delivery time.",
      "<b>Core Developer of RLDataCoach</b>: Developed a coaching algorithm that analyzes Rocket League gameplay, identifying 60+ in-game events per replay. Benchmarked over 20,000 replays to deliver personalized, rank-specific training recommendations.",
      "<b>E-commerce Platform Optimization</b>: Integrated payment services, campaign modules, and AWS solutions (Lambda, SQS, SNS, S3), driving a 30% increase in sales and improving operational efficiency by 40%",
      "<b>Social Media Platform Enhancement</b>: Upgraded functionality for a volunteer organization's platform, boosting user engagement by 25% and improving platform adoption and user experience."
    ],
    technologies: ["C#", "ASP .NET", ".NET Web API", "React", "PostgreSQL", "MongoDB", "AWS"]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-12 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <header>{exp.period}</header>
                  <Image
                    alt=""
                    loading="lazy"
                    width="100"
                    height="10"
                    className="rounded transition group-hover:border-slate-200/30 mt-2 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    src={exp.logo}
                  />
                </div>

                <div className="z-10 sm:col-span-10">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <ExternalLink href={exp.companyUrl}>
                      {exp.role} {" . "} {exp.company}
                    </ExternalLink>
                  </h3>

                  {exp.description.map((desc, i) => (
                    <p
                      key={i}
                      className="mt-2 text-sm leading-normal text-justify"
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  ))}

                  {exp.relatedLinks && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {exp.relatedLinks.map((link, i) => (
                        <li key={i} className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{link.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech, i) => (
                      <TechBadge key={i} name={tech} />
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/experience/details"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Detailed {" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Experience
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
