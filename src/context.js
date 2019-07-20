import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalProduct: detailProduct
  };
//  setting "products on state"
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {...item };
      products = [...products, singleItem];
    });
    this.setState({ 
      products 
    });
  };
// Handling the click event to show Product details.

  getProduct = (id) => {
  return this.state.products.find(item=> item.id === id)
 }
  handleDetail = (id) => {
   const product = this.getProduct(id)
   this.setState({
     detailProduct: product
   })
  };

  // Add to Cart

  addToCart = (id) => {
    const cartItem = this.getProduct(id);
    cartItem.count = 1;
    const price = cartItem.price;
    cartItem.total= price;
    this.setState({
      cart: [...this.state.cart,cartItem]
    })
  };

  // Opening and Closing of Modal upon adding items to the cart

  openModal = (id) => {
    const product = this.getProduct(id);
    console.log(product);
    this.setState(
      {
        modalProduct: product,
        modalOpen: true
      },
      () => console.log("modal", this.state.modalProduct)
    );
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
