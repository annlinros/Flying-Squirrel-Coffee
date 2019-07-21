import React from 'react'

export default function CartColumns() {
	return (
    <div className="container d-none d-md-block" >
      <div className="row">
        <div className="col-2-md mx-auto">
          <p>PRODUCTS</p>
        </div>
        <div className="col-2-lg mx-auto">
          <p>PRODUCT NAME</p>
        </div>{" "}
        <div className="col-2-lg mx-auto">
          <p>PRICE</p>
        </div>{" "}
        <div className="col-2-lg mx-auto">
          <p>QUANTITY</p>
        </div>
        <div className="col-2-lg mx-auto">
          <p>REMOVE</p>
        </div>{" "}
        <div className="col-2-lg mx-auto">
          <p>TOTAL</p>
        </div>
      </div>
    </div>
  );
}
