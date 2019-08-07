import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import { ButtonElement } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand" />
      </Link>
       <h3>THE FLYING SQUIRREL</h3>
        <div className="nav-item px-2">
          <Link to="/cart">
            <ButtonElement navBtn>
              <FontAwesomeIcon icon={faShoppingCart} />
            </ButtonElement>
          </Link>
        </div>
    </nav>
  );
};
export default Navbar;
