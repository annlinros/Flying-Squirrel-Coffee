import React, { useContext } from "react";
import { ProductContext } from "../../context";

export default function CartTotals() {
  const { cartSubTotal, cartTax, cartTotal, resetCart} = useContext(
    ProductContext
  );
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="w-100  d-flex flex-column justify-content-center align-items-end">
            <button
              className="btn btn-outline-danger"
              onClick={() => resetCart()}
            >
              Clear Cart
            </button>
            <span className="">
              <strong>Sub-total: {cartSubTotal}</strong>
            </span>
            <span className="">
              <strong>Tax: {cartTax}</strong>
            </span>
            <span className="">
              <strong>Total: {cartTotal}</strong>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
