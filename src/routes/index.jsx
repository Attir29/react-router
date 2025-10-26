import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "../pages/register";
import Login from "../pages/login";
import DashboardUser from "@/pages/dashboard/dashboardUser/dashboardUser";
import DashboardProduct from "@/pages/dashboard/dashboardProduct";
import { columns } from "@/pages/dashboard/dashboardUser/columsUser";
import NotFound from "../pages/404notfound";
import AddUser from "@/pages/dashboard/dashboardUser/addUser";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <DashboardProduct />,
    },
    {
      path: "/dashboard/user",
      element: <DashboardUser />,
    },
    {
      path: "/dashboard/product",
      element: <DashboardProduct />,
    },
    {
      path: "/dashboard/user/add",
      element: <AddUser />,
    },
  ]);

  return <RouterProvider router={router} />;
}
