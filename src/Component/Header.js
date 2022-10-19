import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("user context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Log in
        </Link>
        {user?.email && <small>Welcome,{user.email}</small>}
        {user?.email ? (
          <button onClick={handleSignOut} className="btn btn-sm">
            Sign out
          </button>
        ) : (
          <Link className="btn btn-outline btn-sm btn-warning" to="/login">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
