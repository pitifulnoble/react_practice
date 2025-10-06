import Login from "@/view/Login/Login";
import { createBrowserRouter } from "react-router-dom";

const router = [
  {
    path: "/login",
    element: <Login />,
  },
];

export default createBrowserRouter(router);
