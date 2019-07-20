import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import { ButtonElement } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  bg-white d-flex justify-content-between">
        <img src={logo} alt="logo" className="navbar-brand" />
        <h1 className="title ml-5">THE FLYING SQUIRREL</h1>
        <div className="m-4">
          <Link to="/">
            <ButtonElement navBtn>Shop</ButtonElement>
          </Link>
          {"/"}
          <Link to="/cart">
            <ButtonElement navBtn>
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} />
            </ButtonElement>
          </Link>
        </div>
      </nav>
    );
  }
}
export default Navbar;
