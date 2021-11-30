import { API } from "../config";

export const createCategory = (_id, token, nameCat) => {
  return fetch(`${API}/category/create/${_id}`, {
    method: "POST",
    headers: {
      // mode: "cors",
      // credentials: "include",
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(nameCat),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = (_id, token, product) => {
  return fetch(`${API}/product/create/${_id}`, {
    method: "POST",
    headers: {
      // mode: "cors",
      // credentials: "include",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
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
