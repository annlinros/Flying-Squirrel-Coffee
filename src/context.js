import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: storeProducts,
    modalProduct: detailProduct,
    modalOpen: false
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
      () => console.log("aded to cart", this.state.cart)
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
  // Increment and decrement product count in cart

  incrementCount = id => {
    console.log("incremented");
  };

  decrementCount = id => {
    console.log("decremented");
  };
  // Remove item from cart
  clearCartItem = id => {
    console.log("item cleared");
  };

  // Reset cart
  resetCart = id => {
    console.log("cart resetted");
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
          incrementCount:this.incrementCount,
          decrementCount: this.decrementCount,
          clearCartItem:this.clearCartItem,
          resetCart:this.resetCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
