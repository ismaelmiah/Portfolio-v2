import "./App.css";
import ArchiveProjects from "./ArchiveProjects";
import Layout from "./layout";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/archive",
    element: <ArchiveProjects />,
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
            "radial-gradient(600px at 750px 505px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      ></div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
