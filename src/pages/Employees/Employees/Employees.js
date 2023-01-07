import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Employees = () => {

  const url=`http://https://human-resource-server.vercel.app/employee`
  const { data: employees = [], isLoading, isError, } = useQuery({
    queryKey: ["employees"],
    queryFn: async () =>
      await fetch(url)
      .then((res) => res.json()),

  });
  console.log(employees);

  return (
    <div>
      <div className="mb-5 text-black font-normal text-base">
        Home {">"} <span className="font-light">Employees</span>
      </div>
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-between mb-5">
          <h2 className=" text-lg font-semibold text-gray-700">
            List All Employees
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
                <th>DESIGNATION</th>
                <th>CONTACT NUMBER</th>
                <th>GENDER</th>
                <th>ROLE</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              
              {
                employees.map( employee =><tr key={employee._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={employee.profilePicture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{employee.fullName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {employee.designation}
                  </td>
                  <td>{employee.contactNumber}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.role}</td>
                </tr> )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
