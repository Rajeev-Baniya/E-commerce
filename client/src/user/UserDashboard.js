import React, { useEffect, useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Navigate, Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import { initial } from "lodash";
import moment from "moment";

const UserDashboard = () => {
  const [history, setHistory] = useState([]);
  const {
    user: { _id, name, email, role },
    token,
  } = isAuthenticated();

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, []);

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header"> User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/cart" className="nav-link">
              {" "}
              My Cart{" "}
            </Link>
          </li>
          <li className="list-group-item">
            <Link to={`/profile/${_id}`} className="nav-link">
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase History </h3>
        <ul className="list-group">
          <li className="list-group-item">
            {history.map((h, i) => {
              return (
                <div key={i}>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div>
                        <div key={i}>
                          <h6>Product name: {p.name}</h6>
                          <h6>Product price: $ {p.price}</h6>
                          <h6>
                            Purchased date : {moment(h.createdAt).fromNow()}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`Good day ${name}`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{userLinks()}</div>
        <div className="col-9">
          {userInfo()}
          {purchaseHistory(history)}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
