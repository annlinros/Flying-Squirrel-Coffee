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

  //  setting "products on state"

  const[products,setProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState({});


  useEffect(() => {
    settingProducts();
  }, []);

  const settingProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setProducts(products)
    console.log(products);
  };

  // Handling the click event to show Product details.

  const getProduct = id => {
    return products.find(item => item.id === id);
  };
  const handleDetail = id => {
    const product = getProduct(id);
    setDetailProduct(product)
  };

  // Add to Cart

  // addToCart = id => {
  //   const cartItem = this.getProduct(id);

  //   const cart = [...this.state.cart];

  //   // If item is already in the cart,  increment the count

  //   if (cart.indexOf(cartItem) >= 0) {
  //     this.incrementCount(id);
  //   }
  //   // If item is not added, add it to cart.
  //   else {
  //     cartItem.count = 1;
  //     const price = cartItem.price;
  //     cartItem.total = price;

  //     this.setState(
  //       {
  //         cart: [...this.state.cart, cartItem]
  //       },
  //       () => this.addTotals()
  //     );
  //   }
  // };

  // Opening of Modal upon adding items to the cart

  // openModal = id => {
  //   const product = this.getProduct(id);
  //   this.setState({
  //     modalProduct: product
  //   });
  // };

  // Increment product count in cart

  // incrementCount = id => {
  //   let tempCart = [...this.state.cart];

  //   const incrementedCartItem = tempCart.find(item => item.id === id);
  //   incrementedCartItem.count += 1;
  //   incrementedCartItem.total =
  //     incrementedCartItem.price * incrementedCartItem.count;

  //   this.setState(
  //     {
  //       cart: [...tempCart]
  //     },
  //     this.addTotals()
  //   );
  // };
  // Decrement product count in cart

  // decrementCount = id => {
  //   let tempCart = [...this.state.cart];

  //   const decrementedCartItem = tempCart.find(item => item.id === id);

  //   decrementedCartItem.count -= 1;
  //   if (decrementedCartItem.count === 0) {
  //     this.removeCartItem(id);
  //   } else {
  //     decrementedCartItem.total =
  //       decrementedCartItem.price * decrementedCartItem.count;
  //     this.setState(
  //       {
  //         cart: [...tempCart]
  //       },
  //       this.addTotals()
  //     );
  //   }
  // };

  // // Remove item from cart

  // removeCartItem = id => {
  //   const newCartItems = this.state.cart.filter(item => id !== item.id);
  //   this.setState(
  //     {
  //       cart: [...newCartItems]
  //     },
  //     () => this.addTotals()
  //   );
  // };

  // // Reset cart

  // resetCart = () => {
  //   this.setState(
  //     {
  //       cart: []
  //     },
  //     () => {
  //       this.setProducts();
  //       this.addTotals();
  //     }
  //   );
  // };

  // //  Calculate total amount in cart
  // addTotals = () => {
  //   let cartSubTotal = 0;
  //   this.state.cart.map(item => (cartSubTotal += item.total));
  //   const tempTax = cartSubTotal * 0.1;
  //   const cartTax = parseFloat(tempTax.toFixed(2));
  //   const cartTotal = cartSubTotal + cartTax;
  //   this.setState({
  //     cartSubTotal,
  //     cartTax,
  //     cartTotal
  //   });
  // };

  return (
    <ProductContext.Provider
      value={
        {products,
          handleDetail,
          detailProduct
          // addToCart: this.addToCart,
          // openModal: this.openModal,
          // closeModal: this.closeModal,
          // incrementCount: this.incrementCount,
          // decrementCount: this.decrementCount,
          // removeCartItem: this.removeCartItem,
          // resetCart: this.resetCart
        }
      }
    >
      {props.children}
    </ProductContext.Provider>
  );
};
