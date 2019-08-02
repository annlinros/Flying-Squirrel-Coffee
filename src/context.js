import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

export const ProductContext = React.createContext();

export const ProductProvider = props => {
  // state = {
  //   products: [],
  //   detailProduct,
  //   cart: [],
  //   modalProduct: detailProduct,
  //   cartSubTotal: 0,
  //   cartTax: 0,
  //   cartTotal: 0
  // };

  // state declaration

  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [cart, setCart] = useState([]);

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

    // if (cart.indexOf(cartItem) >= 0) {
    //   incrementCount(id);
    // }
    // If item is not added, add it to cart.
    // else {
    cartItem.count = 1;
    const price = cartItem.price;
    cartItem.total = price;
    newCart.push(cartItem);

    // setState(
    //   {
    //     cart: [...state.cart, cartItem]
    //   },
    //   () => addTotals()
    // );
    setCart(newCart);
    // }
  };

  // Opening of Modal upon adding items to the cart

  // openModal = id => {
  //   const product = getProduct(id);
  //   setState({
  //     modalProduct: product
  //   });
  // };

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

  // // Reset cart

  // resetCart = () => {
  //   setState(
  //     {
  //       cart: []
  //     },
  //     () => {
  //       setProducts();
  //       addTotals();
  //     }
  //   );
  // };

  // //  Calculate total amount in cart
  // addTotals = () => {
  //   let cartSubTotal = 0;
  //   state.cart.map(item => (cartSubTotal += item.total));
  //   const tempTax = cartSubTotal * 0.1;
  //   const cartTax = parseFloat(tempTax.toFixed(2));
  //   const cartTotal = cartSubTotal + cartTax;
  //   setState({
  //     cartSubTotal,
  //     cartTax,
  //     cartTotal
  //   });
  // };

  return (
    <ProductContext.Provider
      value={{
        products,
        handleDetail,
        detailProduct,
        addToCart,
        cart,
        removeCartItem,
        incrementCount,
        decrementCount
        // openModal: openModal,
        // closeModal: closeModal,
        // incrementCount: incrementCount,
        // decrementCount: decrementCount,
        // resetCart: resetCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
