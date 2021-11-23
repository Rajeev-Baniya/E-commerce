import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/index";

const isActive = (location, path) => {
  if (location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = () => {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(location, "/")} to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" style={isActive(location, "/dashboard")} to="/dashboard">
            Dashboard
          </Link>
        </li>

        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(location, "/signin")}
                to="/signin"
              >
                Signin
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(location, "/signup")}
                to="/signup"
              >
                Signup
              </Link>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer", color: "#ffffff" }}
              onClick={() =>
                signout(() => {
                  navigate("/");
                })
              }
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
