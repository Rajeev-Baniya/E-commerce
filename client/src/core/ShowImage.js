import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => {
  return (
    <div className="product-img">
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className="mb-3"
        style={{
          maxHeight: "300px",
          maxWidth: "100%",
          minHeight: "90px",
          // minWidth: "50%",
        }}
      />
    </div>
  );
};

export default ShowImage;
