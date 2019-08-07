import React,{useContext} from "react";
import { ProductContext } from "../context";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button";

const Details = () => {
  const { detailProduct,addToCart } = useContext(ProductContext);
  const { id, title, img, info, roast, flavour, ingredients } = detailProduct;

  return (
    <div className="container-fluid details py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-center">
          <img src={img} alt={title} className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-center
        ">
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
          <Link to="/modal">
            <ButtonElement onClick={() => addToCart(id)}>
              Add to cart
            </ButtonElement>
          </Link>
          {"   "}
          <Link to="/">
            <ButtonElement>Back to Products!</ButtonElement>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
