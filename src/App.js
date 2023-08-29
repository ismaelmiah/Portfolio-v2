import "./App.css";
import ArchiveProjects from "./Components/archiveProjects";
import Layout from "./Components/layout";
import ErrorPage from "./Components/errorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Admin/login";

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
  {
    path: "/login",
    element: <Login />,
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
