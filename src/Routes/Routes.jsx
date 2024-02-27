import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";

import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import Casino from "../pages/Casino/Casino";
import Slot from "../pages/Slot/Slot";
import Sports from "../pages/Sports/Sports";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AccountLayout from "../Layout/AccountLayout/AccountLayout";
import Deposit from "../pages/AccountPages/Deposit/Deposit";
import Withdrawal from "../pages/AccountPages/Withdrawal/Withdrawal";

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
        path: "/user/register",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "casino",
        element: <Casino />,
      },
      {
        path: "slots",
        element: <Slot />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <AccountLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/account/wallet",
            element: <Deposit />,
          },
          {
            path: "/account/wallet/deposit",
            element: <Deposit />,
          },
          {
            path: "/account/wallet/withdrawal",
            element: <Withdrawal />,
          },
        ],
      },
    ],
  },
]);
