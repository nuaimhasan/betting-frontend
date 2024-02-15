import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Casino from "../pages/Casino/Casino";
import Slot from "../pages/Slot/Slot";
import Login from "../pages/Login/Login";
import Sports from "../pages/Sports/Sports";
import AdminLayout from "../Layout/Adminlayout/AdminLayout";
import Dashboard from "../pages/AdminPages/Dashboard/Dashboard";
import AllSports from "../pages/AdminPages/Game/Sports/AllSports/AllSports";
import AddSport from "../pages/AdminPages/Game/Sports/AddSport/AddSport";
import EditSport from "../pages/AdminPages/Game/Sports/EditSport/EditSport";
import AccountLayout from "../Layout/AccountLayout/AccountLayout";
import Wallet from "../pages/AccountPages/Wallet/Wallet";
import Categories from "../pages/AdminPages/Category/Sport/Categories/Categories";
import AddCategories from "../pages/AdminPages/Category/Sport/Categories/AddCategories";
import EditCategories from "../pages/AdminPages/Category/Sport/Categories/EditCategories";

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
        path: "/login",
        element: <Login />,
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
        element: <AccountLayout />,
        children: [
          {
            path: "/account/wallet",
            element: <Wallet />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/category/sport/all-categories",
        element: <Categories />,
      },
      {
        path: "/admin/category/sport/add-category",
        element: <AddCategories />,
      },
      {
        path: "/admin/category/sport/edit-category/:id",
        element: <EditCategories />,
      },
      {
        path: "/admin/game/sports",
        element: <AllSports />,
      },
      {
        path: "/admin/game/sports/add",
        element: <AddSport />,
      },
      {
        path: "/admin/game/sports/edit/:id",
        element: <EditSport />,
      },
    ],
  },
]);
