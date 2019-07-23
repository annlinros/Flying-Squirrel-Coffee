import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  //  setting "products on state"
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState({
      products
    });
  };
  // Handling the click event to show Product details.

  getProduct = id => {
    return this.state.products.find(item => item.id === id);
  };
  handleDetail = id => {
    const product = this.getProduct(id);
    this.setState({
      detailProduct: product
    });
  };

  // Add to Cart

  addToCart = id => {
    const cartItem = this.getProduct(id);
    cartItem.count = 1;
    const price = cartItem.price;
    cartItem.total = price;
    this.setState(
      {
        cart: [...this.state.cart, cartItem]
      },
      () => this.addTotals()
    );
  };

  // Opening and Closing of Modal upon adding items to the cart

  openModal = id => {
    const product = this.getProduct(id);
    console.log(product);
    this.setState({
      modalProduct: product,
      modalOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };
  // Increment product count in cart

  incrementCount = id => {
    let tempCart = [...this.state.cart];

    const incrementedCartItem = tempCart.find(item => item.id === id);

    incrementedCartItem.count += 1;
    incrementedCartItem.total =
      incrementedCartItem.price * incrementedCartItem.count;

    this.setState(
      {
        cart: [...tempCart]
      },
      this.addTotals()
    );
  };
  // Decrement product count in cart

  decrementCount = id => {
    let tempCart = [...this.state.cart];

    const decrementedCartItem = tempCart.find(item => item.id === id);

    decrementedCartItem.count -= 1;
    if (decrementedCartItem.count === 0) {
      this.removeCartItem(id);
    } else {
      decrementedCartItem.total =
        decrementedCartItem.price * decrementedCartItem.count;
      this.setState(
        {
          cart: [...tempCart]
        },
        this.addTotals()
      );
    }
  };
  // Remove item from cart
  removeCartItem = id => {
    const newCartItems = this.state.cart.filter(item => id !== item.id);
    this.setState(
      {
        cart: [...newCartItems]
      },
      () => this.addTotals()
    );
  };

  // Reset cart
  resetCart = () => {
    this.setState({
      cart: []
    }, () => {
      this.setProducts();
      this.addTotals()
    });
  };
  //  Calculate total amount in cart
  addTotals = () => {
    let cartSubTotal = 0;
    this.state.cart.map(item => (cartSubTotal += item.total));
    const tempTax = cartSubTotal * 0.1;
    const cartTax = parseFloat(tempTax.toFixed(2));
    const cartTotal = cartSubTotal + cartTax;
    this.setState({
      cartSubTotal,
      cartTax,
      cartTotal
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount,
          removeCartItem: this.removeCartItem,
          resetCart: this.resetCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
