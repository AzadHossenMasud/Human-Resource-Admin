import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { FiHome} from "react-icons/fi";
import { IconName, IoPeopleOutline } from "react-icons/io5";
import { useQuery } from "react-query";
const Home = () => {
  const url=`https://human-resource-server.vercel.app/employee`
  const { data: employees = [], isLoading, isError, } = useQuery({
    queryKey: ["employeesnumber"],
    queryFn: async () =>
      await fetch(url)
      .then((res) => res.json()),

  });
  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="card w-auto bg-base-100 shadow-xl mt-5">
          <div className="card-body">
            <h2 className="card-title text-center">Total no of Employees</h2>
            <p className="font-bold text-8xl text-center">{employees.length}</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Employees
              </button>
            </div>
          </div>
        </div>

        <div className="card w-auto bg-base-100 shadow-xl mt-5 ml-3">
          <div className="card-body">
            <h2 className="card-title text-center">Total Attendance</h2>
            <p className="font-bold text-8xl text-center">{employees.length}</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Attendance
              </button>
            </div>
          </div>
        </div>

        <div className="card w-auto bg-base-100 shadow-xl mt-5 ml-3">
          <div className="card-body">
            <h2 className="card-title text-center">Overtime Employees</h2>
            <p className="font-bold text-8xl text-center">{employees.length}</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Overtime
              </button>
            </div>
          </div>
        </div>

        <div className="card w-auto bg-base-100 shadow-xl mt-5 ml-3">
          <div className="card-body">
            <h2 className="card-title text-center">Recent Announcments</h2>
            <p className="font-bold text-8xl text-center">{employees.length}</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Announcment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* list of Announcments */}

      <div className="card w-auto bg-base-100 shadow-xl mt-5">
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex justify-between mb-5">
            <h2 className=" text-lg font-semibold text-gray-700">
              List of Announcement
            </h2>
            <Link to="/admin/Announcement">
              {" "}
              <button className=" btn btn-sm btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Announcement
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">Tommorow versity off</div>
                    </div>
                  </div>
                </td>
                <td>CSE</td>
                <td className="overflow-none">
                  Agamikal hortal thakar krone versity bondho thakbe. But
                  unfortunately, class off thakbe na. shokol class online e nea
                  hobe. ha ha ha...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
