import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            // id,
            title,
            // price,
            img,
            // inCart,
            info,
            roast,
            flavour,
            ingredients
          } = value.detailProduct;
          return (
            <div className="container details py-5">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h1>{title}</h1>
                  <p className="sub-info">
                    <strong>Ingredients :</strong> {ingredients}
                  </p>
                  <p className="sub-info">
                    <strong>Flavour :</strong> {flavour}
                  </p>
                  <p className="sub-info">
                    <strong>Roast :</strong> {roast}
                  </p>
                  <p> {info}</p>
                  <Link to="/cart">
                    {/* <ButtonElement>Add to Cart</ButtonElement> */}
                    <button>Add to Cart</button>
                  </Link>
                  <Link to="/productlist">
                    <button>Back to Products</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
