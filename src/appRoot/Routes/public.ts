import { lazy } from "react";

const Login = lazy(() => import("../../modules/Login"));

const publicRoutes = [
  {
    component: Login,
    path: "/login",
    id: "login",
    exact: true
  }
];

export default publicRoutes;
