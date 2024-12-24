import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Rooms from "../pages/Rooms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/rooms",
    element: <Rooms></Rooms>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
