import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const Attendence = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const url = `https://human-resource-server.vercel.app/employee`;
  const {
    data: employees = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["employeesattendence"],
    queryFn: async () => await fetch(url).then((res) => res.json()),
  });

//   console.log(employees);
  const onSubmit = (data) => {
    console.log(data)

    const employeeData = {
        employeeId: data.employeeId,
        date: data.date,
        inTime: data.inTime,
        outTime: data.outTime

    }
    fetch("https://human-resource-server.vercel.app/attendence", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      })
        .then((response) => response.json())
        .then((employeeResult) => {
          toast.success('Employee Added')
          // console.log(employeeResult);
          reset()
        })
        .catch((error) => {
          console.error("Error:", error);
        });

  };

     

  //   };

  // 1. Employee Id [dropdown]
  // 2. Attendance date
  // 3. In time
  // 4. Out time

  return (
    <div>
      <h2 className=" text-lg font-semibold text-gray-700">Attendence</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
        <div className=" grid grid-cols-3 justify-between gap-5">
          {/* Employee ID*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employee ID</span>
            </label>
            <label className="input-group">
              <select
                {...register("employeeId")}
                className="select select-bordered w-2/3 max-w-xs"
              >
                {employees.map((employee) => (
                  <option key={employee._id} value={employee.employeeId}>{employee.employeeId}</option>
                ))}
                
              </select>
            </label>
            {errors.lastName?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>

          {/* Date*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered"
                {...register("date", {
                  required: true,
                })}
                aria-invalid={errors.date ? "true" : "false"}
              />
            </label>
            {errors.date?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">In Time</span>
            </label>
            <label className="input-group">
              <input
                type="time"
                placeholder="In Time"
                className="input input-bordered"
                {...register("inTime", {
                  required: true,
                })}
                aria-invalid={errors.inTime ? "true" : "false"}
              />
            </label>
            {errors.inTime?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Out Time</span>
            </label>
            <label className="input-group">
              <input
                type="time"
                placeholder="Out Time"
                className="input input-bordered"
                {...register("outTime", {
                  required: true,
                })}
                aria-invalid={errors.outTime ? "true" : "false"}
              />
            </label>
            {errors.outTime?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>

          


        </div>

        <div className="flex justify-center mt-5">
          <button className="btn btn-sm text-center">
            <input type="submit" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Attendence;
