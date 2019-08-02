import React, { useContext } from "react";
import { ProductContext } from "../../context";
import CartItem from "./CartItem";

export default function CartList() {
          const { cart } = useContext(ProductContext);
	return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
