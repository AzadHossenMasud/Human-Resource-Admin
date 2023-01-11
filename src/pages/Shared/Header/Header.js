import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const {logoutUser} = useContext(AuthContext)
  const handleLogout = ()=>{
    logoutUser()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
<<<<<<< HEAD
      <div className="navbar bg-sky-900 text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/admin">
          HR
        </Link>
        <button className="btn" onClick={handleLogout}>Logout</button>

=======
      <div className="navbar bg-sky-900 text-neutral-content flex justify-between">
        <Link className="btn btn-ghost normal-case text-xl ml-3" to="/">
          HR
        </Link>
        <Link className="btn btn-ghost normal-case text-xl mr-3" to="../Login">
          Login
        </Link>
>>>>>>> 3c23d05932948640ad9fcf75fc2287838d6ad7c5
      </div>
    </div>
  );
};

export default Header;
