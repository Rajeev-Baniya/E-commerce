import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { Link } from "react-router-dom";
import { getCart, itemTotal } from "./cartHelpers";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your Cart has {`${items.length}`} items </h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButtonn={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => {
    return (
      <h2>
        Your Cart is empty. <br /> <Link to="/shop">Continue Shopping</Link>
      </h2>
    );
  };

  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items. Add remove checkout or continue shopping."
      className="container-fluid"
    >
      <div className="row">
        <div className="col-5">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>

        <div className="col-1"></div>

        <div className="col-6">
          <h2 className="mb-4">Your cart Summary</h2>
          <hr />
          <Checkout products={items} />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
