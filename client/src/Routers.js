import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Menu from "./core/Menu";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";

const Routers = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route
          path="/dashboard"
          exact
          element={
            <PrivateRoute>
              {" "}
              <UserDashboard />{" "}
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
