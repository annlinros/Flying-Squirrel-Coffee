import React from 'react'

export default function CartColumns() {
	return (
    <div className="container-fluid text-center d-none d-md-block">
      <div className="row">
        <div className="col-md-2">
          <p>PRODUCTS</p>
        </div>
        <div className="col-md-2">
          <p>PRODUCT NAME</p>
        </div>{" "}
        <div className="col-md-2">
          <p className="">PRICE</p>
        </div>{" "}
        <div className="col-md-2">
          <p>QUANTITY</p>
        </div>
        <div className="col-md-2">
          <p>REMOVE</p>
        </div>{" "}
        <div className="col-md-2">
          <p>TOTAL</p>
        </div>
      </div>
    </div>
  );
}
