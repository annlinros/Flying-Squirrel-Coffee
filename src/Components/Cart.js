import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartColumns from './CartColumns'

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Your Cart</h1>
        <CartColumns />
        <ProductConsumer>
            {value => {
                value.cart.map(item=> <CartColumns item={item}/> )
            }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
