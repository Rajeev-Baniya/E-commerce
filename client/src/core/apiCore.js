import { API } from "../config";

export const getProducts = (sortBy) => {
  return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = { limit, skip, filters };
  return fetch(`${API}/products/by/search`, {
    method: "POST",
    headers: {
      // mode: "cors",
      // credentials: "include",
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
