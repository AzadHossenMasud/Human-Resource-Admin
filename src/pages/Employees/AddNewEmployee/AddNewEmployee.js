import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonFill, IconName } from "react-icons/bs";

const AddNewEmployee = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              <span>
                <BsPersonFill></BsPersonFill>
              </span>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
            </label>
            {errors.firstName?.type === "required" && (
              <p className=" text-red-600" role="alert">
                First name is required
              </p>
            )}
            {errors.firstName?.type === "pattern" && (
              <p className=" text-red-600" role="alert">
                Name Should be Alphabet
              </p>
            )}
          </div>
          {/* Last Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <label className="input-group">
              <span>
                <BsPersonFill></BsPersonFill>
              </span>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
            </label>
            {errors.lastName?.type === "required" && (
              <p className=" text-red-600" role="alert">
                First name is required
              </p>
            )}
            {errors.lastName?.type === "pattern" && (
              <p className=" text-red-600" role="alert">
                Name Should be Alphabet
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
              
              <select {...register("gender")} className='select select-bordered w-2/3 max-w-xs'>
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
              <span>
                <BsPersonFill></BsPersonFill>
              </span>
              <input
                type="email"
                placeholder="Email"
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
                First name is required
              </p>
            )}
            {errors.profilePicture?.type === "pattern" && (
              <p className=" text-red-600" role="alert">
                Name Should be Alphabet
              </p>
            )}
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewEmployee;
