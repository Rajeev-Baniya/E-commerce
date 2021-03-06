import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from local storage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setSuccess(false);
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then((data) => {
      console.log(data);
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          required
          autoFocus
        />
      </div>
      <button className="btn btn-primary">Create</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success text-center">{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return (
        <h3 className="text-danger text-center">
          {" "}
          {name} category already exists
        </h3>
      );
    }
  };

  const goBack = () => {
    return (
      <div className="mt-5 text-center">
        <Link to="/admin/dashboard" className="text-warning">
          Back to Dashboard
        </Link>
      </div>
    );
  };
  return (
    <Layout
      title="Add a new Category"
      description={`Good day Admin ${user.name}, ready to add a new Category?`}
    >
      {showSuccess()}
      {showError()}
      <div className="">
        <div className="col-md-8 offset-md-2">{newCategoryForm()} </div>
      </div>
      {goBack()}
    </Layout>
  );
};

export default AddCategory;
