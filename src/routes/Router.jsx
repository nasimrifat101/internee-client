import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/components/Auth/Login";
import Signup from "../pages/components/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<Signup></Signup>
      }
    ],
  },
]);

export default router;
