import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartColumns from "./CartColumns";
import { Link } from "react-router-dom";


export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <h1 className="title">Your Cart</h1>
                <CartColumns />
              </React.Fragment>
            );
          } else {
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
