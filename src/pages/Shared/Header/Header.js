import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-sky-900 text-neutral-content flex justify-between">
        <Link className="btn btn-ghost normal-case text-xl ml-3" to="/">
          HR
        </Link>
        <Link className="btn btn-ghost normal-case text-xl mr-3" to="../Login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
