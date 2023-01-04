import { createBrowserRouter } from "react-router-dom";
import Admin from "../layout/Admin";
import AddNewEmployee from "../pages/Employees/AddNewEmployee/AddNewEmployee";
import Employees from "../pages/Employees/Employees/Employees";
import Home from "../pages/Home/Home/Home";

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
    ],
  },
]);
