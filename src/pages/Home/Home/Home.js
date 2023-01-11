import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { FiHome} from "react-icons/fi";
import { IconName, IoPeopleOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <div className="card-body">
          <h2 className="card-title justify-center">Total Employees</h2>
          <p className="font-bold text-8xl text-center">25</p>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
              Go to Employees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
