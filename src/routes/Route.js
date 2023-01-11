import { createBrowserRouter } from "react-router-dom";
import Admin from "../layout/Admin";
import AddAnnouncement from "../pages/Announcement/AddAnnouncement/AddAnnouncement";
import Announcement from "../pages/Announcement/Announcement/Announcement";
import AddNewEmployee from "../pages/Employees/AddNewEmployee/AddNewEmployee";
import Employees from "../pages/Employees/Employees/Employees";
import Home from "../pages/Home/Home/Home";
import LoginPage from "../pages/Login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin></Admin>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/employees",
        element: <Employees></Employees>,
      },
      {
        path: "/addnewemployee",
        element: <AddNewEmployee></AddNewEmployee>,
      },
      {
        path: "/announcement",
        element: <Announcement></Announcement>,
      },
      {
        path: "/addannouncement",
        element: <AddAnnouncement></AddAnnouncement>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
]);
