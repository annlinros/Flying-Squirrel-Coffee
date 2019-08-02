import React from "react";
import styled from "styled-components";
import { ProductContext } from "../context";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

 const Product = ({product}) => {
    const { id, img, title, price } = product;

    return (
      <ProductWrapper className="col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="card">
          <div className="img-container">
            <Link to="/details">
              <img
                className="card-img-top"
                src={img}
                alt={title}
                // onClick={() => value.handleDetail(id)}
              />
            </Link>
          </div>
          <div className="card-footer d-flex justify-content-between ">
            <p className="card-title">{title}</p>
            <p>${price}</p>
          </div>
          <div>
            <React.Fragment>
              <Link to="/modal">
                <ButtonElement
                  className="cart-btn"
                  // onClick={() => {
                  //   value.addToCart(id);
                  //   value.openModal(id);
                  // }}
                >
                  ADD TO CART <FontAwesomeIcon icon={faShoppingCart} />
                </ButtonElement>
              </Link>
            </React.Fragment>
          </div>
        </div>
      </ProductWrapper>
    );

  }

export default Product;

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
  .cart-btn {
    width: 100%;
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
