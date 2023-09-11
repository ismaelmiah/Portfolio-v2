const Dashboard = () => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <div className="flex flex-row w-full">
              <div className="basic-1/2 w-full px-2">
                <a
                  className="hover:text-violet-600 py-12 px-6 bg-white shadow-lg mb-6 rounded-lg items-center justify-center h-12 block flex"
                  href="/admin/editor/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    fill="currentColor"
                    className="me-3 bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                  <span className="py-8 px-2 block text-center">New Posts</span>
                </a>
              </div>
              <div className="basic-1/2 w-full px-2">
                <a
                  className="hover:text-violet-600 py-12 px-6 bg-white shadow-lg mb-6 rounded-lg items-center justify-center h-12 block flex"
                  href="/admin/pages/editor/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="me-3 bi"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12C3 10.8954 3.89543 10 5 10H19C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14H5C3.89543 14 3 13.1046 3 12Z" />
                    <path d="M12 3C13.1046 3 14 3.89543 14 5L14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19L10 5C10 3.89543 10.8954 3 12 3Z" />
                  </svg>
                  <span className="py-8 px-2 block text-center">New Pages</span>
                </a>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="basic-1/3 w-full h-12 px-2">
                <a
                  className="hover:text-violet-600 py-8 px-2 bg-white shadow-lg mb-6 rounded-lg items-center justify-center h-12 block flex"
                  href="/admin/blog/"
                >
                  <span class="block text-2xl font-light mb-2">4</span>
                  <span class="block font-medium">Posts</span>
                </a>
              </div>
              <div className="basic-1/3 w-full h-12 px-2">
                <a
                  className="hover:text-violet-600 py-8 px-2 bg-white shadow-lg mb-6 rounded-lg items-center justify-center h-12 block flex"
                  href="/admin/blog/"
                >
                  <span class="block text-2xl font-light mb-2">4</span>
                  <span class="block font-medium">Posts</span>
                </a>
              </div>
              <div className="basic-1/3 w-full h-12 px-2">
                <a
                  className="hover:text-violet-600 py-8 px-2 bg-white shadow-lg mb-6 rounded-lg items-center justify-center h-12 block flex"
                  href="/admin/blog/"
                >
                  <span class="block text-2xl font-light mb-2">4</span>
                  <span class="block font-medium">Posts</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-24 lg:w-1/2 lg:py-24"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
