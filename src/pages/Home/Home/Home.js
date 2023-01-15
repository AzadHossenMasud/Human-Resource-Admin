import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { FiHome} from "react-icons/fi";
import { IconName, IoPeopleOutline } from "react-icons/io5";
import { useQuery } from "react-query";
const Home = () => {
  const url=`https://human-resource-server.vercel.app/home`
  const { data: homeElements = [], isLoading, isError, } = useQuery({
    queryKey: ["home"],
    queryFn: async () =>
      await fetch(url)
      .then((res) => res.json()),

  });

  const {latestAnnouncement,todaysAttendenceCount, totalEmployee} = homeElements

  // console.log(latestAnnouncement)
  
  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="card w-auto bg-base-100 shadow-xl mt-5">
          <div className="card-body">
            <h2 className="card-title text-center">Total no of Employees</h2>
            <p className="font-bold text-8xl text-center">{totalEmployee}</p>
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
            <p className="font-bold text-8xl text-center">{todaysAttendenceCount}</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Attendance
              </button>
            </div>
          </div>
        </div>

        {/* <div className="card w-auto bg-base-100 shadow-xl mt-5 ml-3">
          <div className="card-body">
            <h2 className="card-title text-center">Overtime Employees</h2>
            <p className="font-bold text-8xl text-center">5</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Overtime
              </button>
            </div>
          </div>
        </div> */}

        {/* <div className="card w-auto bg-base-100 shadow-xl mt-5 ml-3">
          <div className="card-body">
            <h2 className="card-title text-center">Recent Announcments</h2>
            <p className="font-bold text-8xl text-center">3</p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Announcment
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* list of Announcments */}

      <div className="card w-auto bg-base-100 shadow-xl mt-5">
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex justify-between mb-5">
            <h2 className=" text-lg font-semibold text-gray-700">
              Recent Announcements
            </h2>
            <Link to="/admin/Announcement">
              {" "}
              <button className=" btn btn-sm btn-primary bg-sky-900 hover:bg-sky-700 border-none">
                Go to Announcement
              </button>
            </Link>
          </div>
        </div>

        <div className="m-5">
          <div className="bg-pink-50 rounded-xl">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{latestAnnouncement?.title}</h1>
              <p className="text-xs font-normal">
                <span>{latestAnnouncement?.department}</span> Department{" "}
                <span className="font-bold text-xl text-slate-500">.</span>
                <span>{latestAnnouncement?.startDate}</span>
              </p>
              <p className="py-5">
              {latestAnnouncement?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Announcements section ends here */}
    </div>
  );
};

export default Home;
