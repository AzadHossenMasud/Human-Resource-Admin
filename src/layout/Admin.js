import React from "react";
import { FiHome } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import { MdOutlineAnnouncement } from "react-icons/md";

const Admin = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <div className="drawer drawer-mobile bg-base-300">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-5">
            {/* <!-- Page content here --> */}
            {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content font-semibold text-lg">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/">
                  <FiHome></FiHome>Home
                </Link>
              </li>
              <li>
                <Link to="/employees">
                  <IoPeopleOutline></IoPeopleOutline> Emloyees
                </Link>
              </li>
              <li>
                <Link to="/announcement">
                  <MdOutlineAnnouncement></MdOutlineAnnouncement> Announcement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
