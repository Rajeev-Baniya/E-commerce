import React, { Component } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, children, ...rest }) => {
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
    <>
      {isAuthenticated() && isAuthenticated().user.role === 1 ? (
        children
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

export default AdminRoute;
