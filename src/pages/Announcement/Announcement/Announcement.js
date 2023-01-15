import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Announcement = () => {
  const url = `https://human-resource-server.vercel.app/announcement`;
  const {
    data: announcements = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => await fetch(url).then((res) => res.json()),
  });

  // console.log(announcements)

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/announcement/${id}`, {
      method: "DELETE", // or 'PUT'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-between mb-5">
          <h2 className=" text-lg font-semibold text-gray-700">
            List of Announcement
          </h2>
          <Link to="/admin/addannouncement">
            {" "}
            <button className=" btn btn-sm btn-primary bg-sky-900 hover:bg-sky-700 border-none">
              + Add New
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
              <th>Start Date</th>
              <th>End Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {announcements.map((announcement) => (
              <tr key={announcement?._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{announcement?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{announcement?.department}</td>
                <td>{announcement?.startDate}</td>
                <td>{announcement?.endDate}</td>
                <td onClick={() => handleDelete(announcement?._id)}>
                  <MdDelete></MdDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Announcement;
