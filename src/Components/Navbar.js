import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import {ButtonElement} from './Button'
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  bg-white">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <Link to="/cart" className="ml-auto">
          <ButtonElement>Cart</ButtonElement>
        </Link>
      </nav>
    );
  }
}
export default Navbar;
