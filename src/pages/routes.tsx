import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./dashboard";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
])