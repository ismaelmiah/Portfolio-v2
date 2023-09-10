import { Link } from "react-router-dom";

const AlgoliaSearchIntegration = () => {
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
              Integrating Algolia Search with Asp .NET
            </h3>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              optio voluptates saepe, voluptas deleniti asperiores perspiciatis
              iure dolorum, necessitatibus labore natus eos suscipit eaque ipsa
              ea impedit. Eveniet, voluptatibus quo.
            </p>
            <p className="mt-10 text-xl text-white">
              Content writing in progress........
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgoliaSearchIntegration;
