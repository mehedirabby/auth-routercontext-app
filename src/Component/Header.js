import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  // console.log("user context", user);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Log in
        </Link>
        {user?.displayName && <small>Welcome,{user.displayName}</small>}
      </div>
    </div>
  );
};

export default Header;
