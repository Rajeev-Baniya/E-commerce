import React, { useState } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { signup } from "../auth/index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => {
    return (
      <form>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            value={name}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleChange("email")}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChange("password")}
            className="form-control"
          />
        </div>
        <button onClick={clickSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };

  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const showSuccess = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New account is created. Please <Link to="/signin"> Sign in </Link>
      </div>
    );
  };

  return (
    <Layout
      title="Sign up"
      className="container col-md-8 offset-md-2"
      description="Signup to Node React E-commerce App"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
