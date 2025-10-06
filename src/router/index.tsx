import Login from "../views/Login/Login";
import Error404 from "../views/404";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
];

export default createBrowserRouter(router);
