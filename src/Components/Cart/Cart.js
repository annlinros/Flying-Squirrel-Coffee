import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;

          // If there are items in cart

          if (cart.length > 0) {
            return (
              <React.Fragment>
                <h1 className="title">Your Cart</h1>
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
                <Link to="/">
                  <button className="btn btn-outline-secondary mx-auto d-flex justify-content-center">
                    Continue shopping!
                  </button>
                </Link>
              </React.Fragment>
            );
          } else {
            //   If cart is empty

            return (
              <div className="d-flex flex-column align-items-center p-5">
                <h1 className="text-center">Your cart is empty!</h1>
                <Link to="/">
                  <button className="btn btn-outline-secondary">
                    Start shopping!
                  </button>
                </Link>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
