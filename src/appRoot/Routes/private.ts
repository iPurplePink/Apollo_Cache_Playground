import { lazy } from "react";

const Timeline = lazy(() => import("../../modules/Timeline"));
const Settings = lazy(() => import("../../modules/Settings"));

const privateRoutes = [
  {
    component: Timeline,
    path: "/timeline",
    id: "timeline",
    exact: true
  },
  {
    component: Settings,
    path: "/settings",
    id: "settings",
    exact: true
  }
];

export default privateRoutes;
