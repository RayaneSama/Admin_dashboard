import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import Vehicles from "./pages/vehicles/Vehicles.jsx";
import { DirectionsCar, Email, Group, HomeOutlined } from "@mui/icons-material";
import Mails from "./pages/mails/Mails.jsx";

export const routerArray = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        text: "Dashboard",
        icon: <HomeOutlined />,
      },
      {
        path: "/user",
        element: <Users />,
        text: "Users",
        icon: <Group />,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
        text: "Vehicles",
        icon: <DirectionsCar />,
      },
      {
        path: "/mails",
        element: <Mails />,
        text: "Mails",
        icon: <Email />,
      },
    ],
  },
];

const router = createBrowserRouter(routerArray);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
