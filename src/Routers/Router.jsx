import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Pages/Auth/LogIn";
import Register from "../Pages/Auth/Register/Register";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Coverage from "../Pages/Coverage";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/coverage",
        loader: () => fetch("coverage.json"),
        Component: Coverage,
      },
      {
        path: "/sendParcel",
        loader: () => fetch("coverage.json"),
        Component: SendParcel,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgetPassword",
        Component: ForgetPassword,
      },
    ],
  },
]);
