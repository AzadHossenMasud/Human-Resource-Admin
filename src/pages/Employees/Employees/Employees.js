import React from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <div>
      <div className="mb-5 text-black font-semibold">
        Home {">"} <span className="font-normal">Employees</span>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className=" text-lg font-semibold text-gray-700">
          List of Employees
        </h2>
        <Link to="/addnewemployee">
          {" "}
          <button className=" btn btn-sm btn-primary">+ Add New</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
