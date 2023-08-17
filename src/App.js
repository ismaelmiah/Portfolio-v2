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
      <RouterProvider router={router} />
    </>
  );
};

export default App;
