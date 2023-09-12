import { Link } from "react-router-dom";

const ApiVersioningInAspDotNet = () => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <Link
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            to="/blogs"
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
            Blogs
          </Link>

          <div className="mt-12 w-full border-collapse text-left">
            <h3 className="text-4xl text-center text-white font-light mb-10 hover:italic">
              API Versioning in Asp .Net
            </h3>

            <h5 className="text-2xl mb-5 text-white text-justify">
              What is API Versioning
            </h5>
            <p className="text-xl mb-5 text-white text-justify p-5 rounded-md lg:block lg:bg-slate-800/50 lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg">
              API versioning is a technique that allows you to make changes and
              enhancements to your API without breaking existing client
              applications.
            </p>
            <h5 className="text-2xl mb-5 text-white text-justify">
              Why we need it?
            </h5>
            <p className="text-xl text-white text-justify p-5 rounded-md lg:block lg:bg-slate-800/50 lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg">
              It gives us three main benefits and those are the reasons why need
              it:
              <div className="mt-5">
                <h4>1. Backward Compatibility</h4>
                <p className="ml-5 text-justify">
                  Different versions of your API can coexist, ensuring that
                  older clients continue to function as expected.
                </p>
                <h4 className="mt-5">2. Maintainability</h4>
                <p className="ml-5 text-justify">
                  As your API evolves over time, versioning helps you keep track
                  of changes and manage different iterations of the API.
                </p>
                <h4 className="mt-5">3. Granular Control:</h4>
                <p className="ml-5 text-justify">
                  API versioning provides granular control over which version of
                  an endpoint a client application can access. This enables you
                  to selectively expose new features to specific clients while
                  ensuring that others continue to use older versions of the
                  API.
                </p>
              </div>
            </p>

            <h5 className="text-2xl mt-5 mb-5 text-white text-justify">
              Implementation of API Versioning
            </h5>
            <p className="text-xl text-white text-justify p-5 rounded-md lg:block lg:bg-slate-800/50 lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg">
              <div className="mt-5">
                <h4>1. Install Nuget Package</h4>
                <p className="ml-5 text-justify">
                  Microsoft.AspNetCore.Mvc.Versioning
                </p>
                <h4 className="mt-5">2. Configure Program.cs</h4>
                <p className="ml-5 text-justify">
                  builder.services.AddApiVersioning is enough to enable
                  versioning. <br /> Then we can set options of service
                  according our needs.
                  <img
                    className="mt-5 mb-5 rounded-lg"
                    src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb2c4194a-f480-46a3-89cb-f963581c36bf_1370x378.png"
                    alt="Code snippets"
                  />
                  First two options set the default version if user does not
                  specify and second line makes sure which version is default.
                  <br />
                  ReportApiVersion tells us that which versions are supported to
                  client, to enable it we need to set its value to true.
                  <br /> Note : It is good to read these values from appsetting
                  instead of hard coding.
                </p>
                <h4 className="mt-5">3. Add versions on controllers</h4>
                <p className="ml-5 text-justify">
                  Tell controller that we are going to enable versioning here by
                  using ApiVersion attribute. Then by using MaToApiVersion
                  specify that for which versions this method/endpoint is
                  available.
                  <img
                    className="mt-5 mb-5 rounded-lg"
                    src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8d81a2d8-ab7c-498f-9e1d-91c2c5a11276_1370x640.png"
                    alt="Code snippets"
                  />
                </p>
                <h4 className="mt-5">4. How to call it via Postman</h4>
                <p className="ml-5 text-justify">
                  By adding api-version in query string parameter we can define
                  our version
                  <img
                    className="mt-5 mb-5 rounded-lg"
                    src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0562b99f-5a8b-47ab-a0f4-ea0aaec0e33f_1540x162.png"
                    alt="Code snippets"
                  />
                </p>
                By default api version is read from query string parameter but
                we can add multiple options or even single as well. For multiple
                options add these lines of code in your service.
                <img
                  className="mt-5 mb-5 rounded-lg"
                  src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F098c4d6e-572b-43ea-a0ad-211f314a7295_1750x594.png"
                  alt="Code snippets"
                />
              </div>
            </p>

            <p className="mt-5">Article writter: Muhammad Waseem</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiVersioningInAspDotNet;
