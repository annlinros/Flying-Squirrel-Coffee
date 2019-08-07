import React, { useContext } from "react";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  // If there are items in cart

  if (cart.length > 0) {
    return (
      <React.Fragment>
        <h3 className="p-2">Your Cart</h3>
        <hr />
        <CartColumns />
        <CartList />
        <CartTotals />
        <div className="d-flex justify-content-center mb-3">
          <Link to="/">
            <button className="btn btn-dark">Continue shopping!</button>
          </Link>
        </div>
      </React.Fragment>
    );
  } else {
    //   If cart is empty

    return (
      <div className="d-flex flex-column align-items-center p-5">
        <h2 className="text-center">Your cart is empty!</h2>
        <Link to="/">
          <button className="btn btn-dark mt-5">Start shopping!</button>
        </Link>
      </div>
    );
  }
};
export default Cart;
