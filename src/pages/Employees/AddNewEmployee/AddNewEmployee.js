import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsPersonFill, IconName } from "react-icons/bs";

const AddNewEmployee = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const image = data.profilePicture[0];
    const formData = new FormData();

    formData.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?key=22742c11cc7cbc3bb3001d7c389d4b18",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const employeeData = {
          fullName: data.firstName + " " + data.lastName,
          contactNumber: data.contactNumber,
          department: data.department,
          designation: data.designation,
          email: data.email,
          employeeId: data.employeeId,
          gender: data.gender,
          officeShift: data.officeShift,
          role: data.role,
          profilePicture: result.data.url,
        };
        fetch("https://human-resource-server.vercel.app/employee", {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  return (
    <div>
      <h2 className=" text-lg font-semibold text-gray-700">Add New Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
        <div className=" grid grid-cols-3 justify-between gap-5">
          {/* First Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                {...register("firstName", {
                  required: true,
                  
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
            </label>
            {errors.firstName?.type === "required" && (
              <p className=" text-red-600" role="alert">
                First name is required
              </p>
            )}
            
          </div>
          {/* Last Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                {...register("lastName", {
                  required: true,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
            </label>
            {errors.lastName?.type === "required" && (
              <p className=" text-red-600" role="alert">
                First name is required
              </p>
            )}
            
          </div>
          {/* Employee ID*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employee ID</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Employee ID"
                className="input input-bordered"
                {...register("employeeId", {
                  required: true,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
            </label>
            {errors.lastName?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>
          {/* Contact Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Contact Number"
                className="input input-bordered"
                {...register("contactNumber", {
                  required: true,
                })}
                aria-invalid={errors.contactNumber ? "true" : "false"}
              />
            </label>
            {errors.contactNumber?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>
          {/*Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <label className="input-group">
              <select
                {...register("gender")}
                className="select select-bordered w-2/3 max-w-xs"
              >
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </label>
          </div>

          {/*Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </label>
            {errors.email?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Employee ID is required
              </p>
            )}
          </div>

          {/*Office Shift */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Office Shift</span>
            </label>
            <label className="input-group">
              <select
                {...register("officeShift")}
                className="select select-bordered w-2/3 max-w-xs"
              >
                <option value="morning">Morning</option>
                <option value="night">Night</option>
              </select>
            </label>
          </div>

          {/*Role */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <label className="input-group">
              <select
                {...register("role")}
                className="select select-bordered w-2/3 max-w-xs"
              >
                <option value="General Manager">General Manager</option>
                <option value="Head Engineering">Head Engineering</option>
                <option value="HR Manager">HR Manager</option>
              </select>
            </label>
          </div>

          {/*Department */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Department</span>
            </label>
            <label className="input-group">
              <select
                {...register("department")}
                className="select select-bordered w-2/3 max-w-xs"
              >
                <option value="Engineering">Engineering</option>
                <option value="Training">Training</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
            </label>
          </div>

          {/*Designation */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <label className="input-group">
              <select
                {...register("designation")}
                className="select select-bordered w-2/3 max-w-xs"
              >
                <option value="Certified Human Resources Professional">
                  CHRP{" "}
                </option>
                <option value="Certified Human Resources Leader">CHRL </option>
                <option value="Certified Human Resources Executive">
                  CHRE{" "}
                </option>
              </select>
            </label>
          </div>

          {/* Profile Picture */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <label className="input-group flex items-center">
              <input
                type="file"
                className="file-input"
                {...register("profilePicture", {
                  required: true,
                })}
                aria-invalid={errors.profilePicture ? "true" : "false"}
              />
            </label>
            {errors.profilePicture?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Image is required
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

export default AddNewEmployee;
