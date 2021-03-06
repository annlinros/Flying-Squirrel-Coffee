import React, { useState, useEffect } from "react";
import { storeProducts, detailOfProduct } from "./data";

export const ProductContext = React.createContext();

export const ProductProvider = props => {
  // state declaration
  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [modalProduct, setModalProduct] = useState(detailOfProduct);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //  setting "products on state"

  useEffect(() => {
    settingProducts();
  }, []);

  const settingProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setProducts(products);
    console.log(products);
  };

  // Handling the click event to show Product details.

  const getProduct = id => {
    return products.find(item => item.id === id);
  };
  const handleDetail = id => {
    const product = getProduct(id);
    setDetailProduct(product);
  };

  // Add to Cart

  const addToCart = id => {
    const cartItem = getProduct(id);

    const newCart = [...cart];

    // If item is already in the cart,  increment the count

    if (cart.indexOf(cartItem) >= 0) {
      incrementCount(id);
    }
    // If item is not added, add it to cart.
    else {
      cartItem.count = 1;
      const price = cartItem.price;
      cartItem.total = price;
      newCart.push(cartItem);

      setCart(newCart);
    }
  };

  // Opening of Modal upon adding items to the cart

  const openModal = id => {
    const product = getProduct(id);
    setModalProduct(product);
  };

  // Increment product count in cart

  const incrementCount = id => {
    let tempCart = [...cart];

    const incrementedCartItem = tempCart.find(item => item.id === id);
    incrementedCartItem.count += 1;
    incrementedCartItem.total =
      incrementedCartItem.price * incrementedCartItem.count;

    setCart(tempCart);
  };

  // Decrement product count in cart

  const decrementCount = id => {
    let tempCart = [...cart];

    const decrementedCartItem = tempCart.find(item => item.id === id);

    decrementedCartItem.count -= 1;
    if (decrementedCartItem.count === 0) {
      removeCartItem(id);
    } else {
      decrementedCartItem.total =
        decrementedCartItem.price * decrementedCartItem.count;
      setCart(tempCart);
    }
  };

  // // Remove item from cart

  const removeCartItem = id => {
    const newCartItems = cart.filter(item => id !== item.id);
    setCart(newCartItems);
  };

  //  Reset cart

  const resetCart = () => {
    setCart([]);
  };

  // //  Calculate total amount in cart
  const addTotals = () => {
    let cartSubTotal = 0;
    cart.map(item => (cartSubTotal += item.total));
    const tempTax = cartSubTotal * 0.1;
    const cartTax = parseFloat(tempTax.toFixed(2));
    const cartTotal = cartSubTotal + cartTax;
    setCartSubTotal(cartSubTotal);
    setCartTax(cartTax);
    setCartTotal(cartTotal);
  };
  //  runs the addTotals everytime cart changes, to update the CartTotals component.
  useEffect(() => addTotals(), [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        handleDetail,
        detailProduct,
        addToCart,
        cart,
        modalProduct,
        openModal,
        removeCartItem,
        incrementCount,
        decrementCount,
        resetCart,
        cartSubTotal,
        cartTax,
        cartTotal
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
