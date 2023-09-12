import "./App.css";
import ArchiveProjects from "./Components/archiveProjects";
import Layout from "./Components/layout";
import ErrorPage from "./Components/errorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Admin/login";
import Dashboard from "./Components/Admin/dashboard";
import Blogs from "./Components/Blog/blogs";
import AlgoliaSearchIntegration from "./Components/Blog/Item/algolia-search";
import ApiVersioningInAspDotNet from "./Components/Blog/Item/api-versioning-asp-dot-net";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "archive",
    element: <ArchiveProjects />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "blogs",
    children: [
      {
        path: "",
        element: <Blogs />,
      },
      {
        path: "integrating-algolia-search-asp-net",
        element: <AlgoliaSearchIntegration />,
      },
      {
        path: "api-versioning-in-asp-net",
        element: <ApiVersioningInAspDotNet />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <div
        id="pointer-events"
        className="pointer-events-none fixed inset-0 z-300 transition duration-300"
        style={{
          background:
            "radial-gradient(400px at 750px 505px, rgba(29, 78, 216, 0.25), transparent 80%)",
        }}
      ></div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
