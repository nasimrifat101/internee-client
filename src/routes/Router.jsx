import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/components/Auth/Login";
import Signup from "../pages/components/Auth/Signup";
import NotFound from "../pages/Errors/NotFound";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import { AllEmployer, AllJobs, Approve, BannedEmp, BannedUsers, MyEmp, Stats } from "../pages/Dashboard/Admin";
import { Internships, Jobs, Recomended } from "../pages/components/pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/recommended',
        element: <Recomended></Recomended>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/internships',
        element: <Internships></Internships>
      },

      // dashboard
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          // admin && manager routes
          {
            path: '/dashboard/allusers',
            element: <AllUsers></AllUsers>
          },
          {
            path: '/dashboard/allemployer',
            element: <AllEmployer></AllEmployer>
          },
          {
            path: '/dashboard/alljobs',
            element: <AllJobs></AllJobs>
          },
          {
            path: '/dashboard/approve',
            element: <Approve></Approve>
          },
          {
            path: '/dashboard/bannedemployers',
            element: <BannedEmp></BannedEmp>
          },
          {
            path: '/dashboard/bannedusers',
            element: <BannedUsers></BannedUsers>
          },
          {
            path: '/dashboard/myemployees',
            element: <MyEmp></MyEmp>
          },
          {
            path: '/dashboard/stats',
            element: <Stats></Stats>
          },

          // employers routes

          // users routes
        ]
      }
    ],
  },
]);

export default router;
