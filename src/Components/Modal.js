import React, { useContext } from "react";
import { ProductContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button";

const Modal = () => {
  const { modalProduct } = useContext(ProductContext);
  const { img, title, price } = modalProduct;
  return (
    <ModalContainer>
      <div className="container my-4">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center p-4"
          >
            <h5>Item added to Cart!</h5>
            <img className="img-fluid pb-3" src={img} alt={title} />
            <h5>{title}</h5>
            <h3>Price: ${price}</h3>
            <Link to="/">
              <ButtonElement>Continue shopping</ButtonElement>
            </Link>
            {"  "}
            <Link to="/cart">
              <ButtonElement>View CART</ButtonElement>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #000;
  }
`;
