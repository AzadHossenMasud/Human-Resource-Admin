import React from 'react';
import { Link } from 'react-router-dom';

const Announcement = () => {
    return (
        <div>
             <div className="bg-white p-5 rounded-md">
        <div className="flex justify-between mb-5">
          <h2 className=" text-lg font-semibold text-gray-700">
            List of Announcement
          </h2>
          <Link to="/addannouncement">
            {" "}
            <button className=" btn btn-sm btn-primary">+ Add New</button>
          </Link>
        </div>
        </div>
        </div>
    );
};

export default Announcement;