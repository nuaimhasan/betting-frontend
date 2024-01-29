import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Casino from "../pages/Casino/Casino";
import Slot from "../pages/Slot/Slot";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/guest/register",
        element: <Signup />,
      },
      {
        path: "casino",
        element: <Casino />,
      },
      {
        path: "slot",
        element: <Slot />,
      },
    ],
  },
]);
