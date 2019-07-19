import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: []
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
    }, () =>  console.log("added to cart", this.state.products)
 )
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
