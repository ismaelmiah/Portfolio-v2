import Link from "next/link";

const Project = () => {
  return (
    <>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Project
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href="https://apex4u.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Apex4u"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Apex4u
                        <span className="inline-block">
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
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-justify">
                    Apex is a brand that offers a wide range of footwear,
                    clothing and accessories for men, women and kids. Apex4u.com
                    is designed to provide customers a universal digital
                    experience: accessible, responsive and most of all, easy to
                    evolve and scale.
                  </p>
                </div>
                <img
                  alt=""
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={"/images/projects/apex.png"}
                />
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href="https://strataspot.com.au"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="StrataSpot"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        StrataSpot
                        <span className="inline-block">
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
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-justify">
                    Strataspot is a cloud based app that allows residents,
                    owners and building managers to connect with ease. From
                    simple maintenance requests to noticeboards, every party has
                    access to all the information they require at the tip of
                    their fingers.
                  </p>
                </div>
                <img
                  alt=""
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={"/images/projects/strataspot.jpg"}
                />
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href="https://transcomdigital.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TranscomDigital"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Transcom Digital
                        <span className="inline-block">
                          <g
                            xmlns="http://www.w3.org/2000/svg"
                            id="Text"
                            transform="translate(512.428 -309.137)"
                          >
                            <path
                              id="Path_131"
                              data-name="Path 131"
                              d="M-498.407,309.311v2.953h-5.16V320.9h-3.7v-8.635h-5.16v-2.953Zm.815,0h8.531c4,0,4,0,4.743.452.886.539,1.147,1.3,1.147,3.318,0,1.72-.174,2.38-.8,2.849a2.545,2.545,0,0,1-1.355.486c1.79.209,2.1.73,2.033,3.406V320.9h-3.475v-.608c0-1.3-.069-1.72-.348-2.015-.243-.278-.5-.313-1.963-.313h-4.986V320.9h-3.527Zm8.5,5.751c1.772-.035,1.772-.035,2.016-.209.278-.174.382-.521.382-1.251,0-.782-.139-1.112-.5-1.268-.243-.1-.3-.1-1.894-.122h-4.969v2.85Zm18.711,3.874h-7.662l-.991,1.963h-4.03l6.133-11.588h5.49l6.064,11.588H-469.4ZM-473.86,312h-.695l-2.241,4.4h5.178Zm15.184-2.693,6.063,8.635h.365l-.087-8.635h3.6V320.9h-6.133l-6.1-8.652h-.382l.087,8.652h-3.6V309.311Zm14.558,7.749c0,.7.069.921.348,1.1.33.208.712.243,3.2.243,3.788,0,3.788,0,3.788-1.025,0-.695-.261-.868-1.39-.886l-2.78-.1-1.876-.087-.938-.035c-2.867-.087-3.666-.817-3.666-3.371,0-2.207.625-3.2,2.224-3.544a34.288,34.288,0,0,1,5.056-.208c3.371,0,4.587.156,5.4.712.695.469.973,1.2.973,2.571,0,.07,0,.313-.017.539H-437.2c-.035-.643-.087-.8-.347-.955-.3-.174-.73-.209-3.232-.209-2.988,0-3.231.07-3.231.921,0,.434.156.66.521.747a27.605,27.605,0,0,0,3.718.209c3.822.122,4.569.209,5.317.677.8.521,1.095,1.3,1.095,2.919,0,2.015-.487,3.006-1.685,3.458-.695.26-2.155.347-5.612.347-3.6,0-5-.156-5.82-.677-.8-.5-1.06-1.181-1.06-2.78v-.556Zm26.529-.625c.017.66.035.921.035,1.095,0,1.876-.486,2.728-1.772,3.144a16.772,16.772,0,0,1-4.778.4c-4.535,0-5.994-.139-6.932-.677a2.592,2.592,0,0,1-1.251-2.258c-.052-.521-.087-1.477-.087-2.953,0-2.589.07-3.545.33-4.187.625-1.563,1.893-1.859,7.957-1.859,3.092,0,4.17.121,4.969.539.99.5,1.338,1.355,1.338,3.214v.573h-3.527c-.035-.764-.069-.921-.278-1.095-.261-.226-1.286-.33-3.509-.33-2.207,0-2.85.069-3.2.348-.417.347-.556,1.025-.556,2.78,0,2.971.052,3.005,3.77,3.005,3.874,0,3.927-.017,3.944-1.737Zm15.826-6.5c.886.678,1.147,1.842,1.147,5.16,0,3.336-.261,4.5-1.147,5.178s-1.981.8-6.776.8c-4.882,0-5.959-.121-6.845-.8-.9-.695-1.147-1.842-1.147-5.247,0-3.232.261-4.413,1.147-5.091s1.964-.8,6.811-.8S-402.65,309.258-401.764,309.936Zm-10.963,2.936a6.134,6.134,0,0,0-.278,2.537c0,1.442.1,1.911.521,2.241.469.365,1.025.417,3.944.417,2.832,0,3.405-.069,3.874-.417.4-.312.521-.816.521-2.223,0-1.72-.1-2.38-.417-2.763-.4-.469-.782-.521-4.013-.521C-412.049,312.143-412.379,312.195-412.727,312.872Zm19.892-3.562,3.44,7.523,3.457-7.523h6.359V320.9h-3.475l.087-8.67h-.591l-4.361,8.67h-2.936l-4.361-8.67h-.625l.087,8.67h-3.475V309.311Z"
                              fill="#f33b3b"
                            />
                            <path
                              id="Path_132"
                              data-name="Path 132"
                              d="M-425.306,343.4h5.85a12.691,12.691,0,0,1,3.041.158,1.944,1.944,0,0,1,1.581,1.375,7.358,7.358,0,0,1,.231,2.408c0,2.116-.182,2.943-.778,3.491-.62.559-1.338.681-4.074.681h-5.85Zm5.874,6.045c2.238,0,2.4-.122,2.4-1.958,0-1-.085-1.447-.329-1.715-.255-.292-.584-.341-2.092-.341h-3.418v4.014Zm8.39-6.045v8.112h-2.591V343.4Zm11.712,3.515v.219c0,.8-.049,2.189-.085,2.579a1.785,1.785,0,0,1-1.593,1.7,18.963,18.963,0,0,1-3.88.219c-2.785,0-3.648-.11-4.33-.572-.718-.474-.851-1.07-.851-3.734,0-3.795.353-4.05,5.607-4.05,3.016,0,4.135.194,4.67.839.341.4.438.9.45,2.092h-2.469c-.012-.474-.037-.571-.195-.681-.243-.17-.815-.219-2.664-.219-2.919,0-2.931.012-2.931,2.116,0,1.374.073,1.788.34,2.007.207.171.426.207,1.119.231l1.448.024c2.882,0,2.955-.024,2.955-.924v-.231h-3.247v-1.617Zm3.574-3.515v8.112h-2.591V343.4Zm10.386,0v2.068h-3.612v6.044h-2.591v-6.044h-3.612V343.4Zm7.589,6.738h-5.364l-.693,1.374h-2.822l4.293-8.112h3.843l4.245,8.112h-2.809Zm-2.432-4.853h-.487l-1.569,3.077h3.624Zm8.889-1.885v6.045h5.765v2.067h-8.355V343.4Z"
                              transform="translate(-49.885 -19.551)"
                              fill="#f33b3b"
                            />
                          </g>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-justify">
                    Transcomdigital.com is #1 online shopping platform in
                    Bangladesh offering premium quality and best online
                    experience to purchase Original Electronic Appliances. You
                    can find almost all kind of electronics solution for your
                    home.
                  </p>
                </div>
                <img
                  alt=""
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={"/images/projects/transcomdigital.jpg"}
                />
              </div>
            </li>
          </ul>
          <div className="mt-12">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
              aria-label="View Full Project Archive"
              href="/archive"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full Project{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Archive
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
    </>
  );
};

export default Project;
