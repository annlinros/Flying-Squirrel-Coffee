import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Product extends Component {
  render() {
    const { id, img, title, price } = this.props.product;

    return (
      <ProductWrapper className="col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div className="img-container">
                <Link to="/details">
                  <img
                    className="card-img-top"
                    src={img}
                    alt={title}
                    onClick={() => value.handleDetail(id)}
                  />
                </Link>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between ">
            <p className="card-title">{title}</p>
            <p>${price}</p>
          </div>
          <div>
            <ProductConsumer>
              {value => (
                <React.Fragment>
                  <ButtonElement heart className="heart-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </ButtonElement>
                  {/* <Link to="/modal"> */}
                    <ButtonElement
                      className="cart-btn"
                      onClick={() => {
                        value.addToCart(id);
                        // value.openModal(id);
                      }}
                    >
                      ADD TO CART
                    </ButtonElement>
                  {/* </Link> */}
                </React.Fragment>
              )}
            </ProductConsumer>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

export const ProductWrapper = styled.div`
  .card {
    border: 0.1rem solid #fff;
    transition: all 0.2s linear;
  }
  .card-footer {
    border: none;
    background: transparent;
    padding: 0.5rem;
  }
  .card-footer > * {
    margin: 0;
  }
  .heart-btn {
    width: 30%;
  }
  .cart-btn {
    width: 70%;
    letter-spacing: 0.1rem;
    background: #fff;
    color: #000;
  }
  &:hover {
    .cart-btn {
      background: var(--mainBrown);
    }
  }
`;
