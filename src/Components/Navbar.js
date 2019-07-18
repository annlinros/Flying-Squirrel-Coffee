import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import { ButtonElement } from "./Button";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  bg-white">
        <img src={logo} alt="logo" className="navbar-brand" />
        <h1 className="title mr-auto">THE FLYING SQUIRREL</h1>
        <Link to="/productlist">
          <ButtonElement>Shop</ButtonElement>
        </Link>
{"/"}
        <Link to="/cart">
          <ButtonElement>Cart</ButtonElement>
        </Link>
      </nav>
    );
  }
}
export default Navbar;
