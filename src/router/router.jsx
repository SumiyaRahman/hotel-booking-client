import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import About from "../pages/About";
import MyBookings from "../pages/MyBookings";
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
    element: <Rooms></Rooms>,
  },
  {
    path: "/rooms/:id",
    element: (
      <PrivateRoute>
        <RoomDetails></RoomDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/myBookings",
    element: (
      <PrivateRoute>
        <MyBookings />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
