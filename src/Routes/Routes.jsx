import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
