import { createBrowserRouter } from "react-router-dom";
import Admin from "../layout/Admin";
import AddAnnouncement from "../pages/Announcement/AddAnnouncement/AddAnnouncement";
import Announcement from "../pages/Announcement/Announcement/Announcement";
import AddNewEmployee from "../pages/Employees/AddNewEmployee/AddNewEmployee";
import Employees from "../pages/Employees/Employees/Employees";
import Home from "../pages/Home/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <PrivateRoute><Admin></Admin></PrivateRoute>,
    children: [
      {
        path: "/admin",
        element: <Home></Home>,
      },
      {
        path: "/admin/employees",
        element: <Employees></Employees>,
      },
      {
        path: "/admin/addnewemployee",
        element: <AddNewEmployee></AddNewEmployee>,
      },
      {
        path: "/admin/announcement",
        element: <Announcement></Announcement>,
      },
      {
        path: "/admin/addannouncement",
        element: <AddAnnouncement></AddAnnouncement>,
      },
    ],
  },
  {
    path: "/",
    element: <LoginPage></LoginPage>
  },
]);
