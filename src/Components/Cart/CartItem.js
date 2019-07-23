import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item, value }) {
  const { id, img, title, price, count, total } = item;
  const { incrementCount, decrementCount, removeCartItem, resetCart } = value;
  return (
    <div className="row my-5 text-center">
      {/* Product Image */}
      <div className="col-10 mx-auto col-md-2">
        <img
          className="img-fluid"
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt={title}
        />
      </div>
      {/* Product title */}
      <div className="col-10 mx-auto col-md-2">
        <span className="d-md-none">Product: </span>
        {title}
      </div>
      {/* Price  */}
      <div className="col-10 mx-auto col-md-2">
        <span className="d-md-none">Price: </span>
        {price}
      </div>
      {/* Count */}
      <div className="col-10 mx-auto col-md-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => decrementCount(id)}
            >
              {" "}
              -{" "}
            </span>
            <span className="mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => incrementCount(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/* Remove Item */}
      <div className="col-10 mx-auto col-md-2">
        <div className="trash-icon" onClick={() => removeCartItem(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      {/* Total */}
      <div className="col-10 mx-auto col-md-2">
        <span className="d-md-none">Price: </span>
		{total }
      </div>
    </div>
  );
}
