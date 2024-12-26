import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
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
    path: "/rooms/:id", 
    element: <PrivateRoute>
      <RoomDetails></RoomDetails>
    </PrivateRoute>,
    loader: ({params}) => fetch(`https://hotel-booking-server-plum-five.vercel.app/rooms/${params.id}`)
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
