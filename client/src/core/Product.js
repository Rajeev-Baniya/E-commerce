import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Layout from "./Layout";

import { read, listRelated } from "./apiCore";

import Card from "./Card";
import Search from "./Search";

const Product = (props) => {
  let params = useParams();

  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        console.log(data);
        //fetch Related Products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
            console.log(relatedProduct);
          }
        });
      }
    });
  };

  useEffect(() => {
    // console.log(params.productId);
    const productId = params.productId;

    loadSingleProduct(productId);
  }, [params]);

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <div className="row">
        <div className="col-7">
          {product && product.description && (
            <Card product={product} showViewProductButton={false} />
          )}
        </div>
        <div className="col-1"></div>
        <div className="col-3  recommend text-center ml-1">
          <h4>Related Products</h4>
          {relatedProduct.map((p, i) => {
            return (
              <div className="mb-3" key={i}>
                <Card key={i} product={p} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
