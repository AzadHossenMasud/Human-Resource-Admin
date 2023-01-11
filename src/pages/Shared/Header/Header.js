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
      <div className="navbar bg-sky-900 text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/admin">
          HR
        </Link>
        <button className="btn" onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
};

export default Header;
