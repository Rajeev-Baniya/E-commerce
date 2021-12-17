import React, { Component } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoute = ({ component: Component, children, ...rest }) => {
  return (
    // <Routes>
    //   <Route
    //     {...rest}
    //     render={(props) =>
    //       isAuthenticated() ? (
    //         children
    //       ) : (
    //         <Navigate
    //           to={{
    //             pathname: "/signin",
    //             state: { from: props.location },
    //           }}
    //         />
    //       )
    //     }
    //   />
    // </Routes>
    <>{isAuthenticated() ? children : <Navigate to="/signin" />}</>
  );
};

export default PrivateRoute;
