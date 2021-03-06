import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Shop from "./core/Shop";
import Menu from "./core/Menu";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import { isAuthenticated } from "./auth";
import AdminRoute from "./auth/AdminRoute";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Orders from "./admin/Orders";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";

const Routers = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route
          path="/user/dashboard"
          exact
          element={
            <PrivateRoute>
              {" "}
              <UserDashboard />{" "}
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/profile/:userId"
          exact
          element={
            <PrivateRoute>
              {" "}
              <Profile />{" "}
            </PrivateRoute>
          }
        ></Route>

        {/* <Route
          path="/profile/:userId"
          exact
          element={
            <AdminRoute>
              {" "}
              <Profile />{" "}
            </AdminRoute>
          }
        ></Route> */}

        <Route
          path="/admin/dashboard"
          exact
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          exact
          element={
            <AdminRoute>
              <ManageProducts />
            </AdminRoute>
          }
        />

        <Route
          path="/create/category"
          exact
          element={
            <AdminRoute>
              <AddCategory />
            </AdminRoute>
          }
        />

        <Route
          path="/create/product"
          exact
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/update/:productId"
          exact
          element={
            <AdminRoute>
              <UpdateProduct />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          exact
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />

        <Route path="/product/:productId" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
