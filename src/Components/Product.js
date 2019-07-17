import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Product({ product }) {
    const {  img, title, price } = product;
    return (
      <ProductWrapper className="col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="card">
          <div className="img-container">
            <Link to="/details">
              <img className="card-img-top" src={img} alt={title} />
            </Link>
            <button className="btn btn-primary ">Cart</button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="card-title">{title}</p>
            <p>${price}</p>
          </div>
        </div>
      </ProductWrapper>
    );
  }
  
  const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.2s linear;
  }
  .card-footer {
    border: none;
    background: transparent;
  }
  &:hover {
    .card {
      box-shadow: 0.2rem 0.2rem 0.5rem 0rem #a9a9a9;
    }
  }
`;
