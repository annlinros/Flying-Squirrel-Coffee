import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
// import Modal from "./Components/Modal";
// import Cart from "./Components/Cart/Cart";
// import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}>
          <ProductList />
        </Route>
        {/* <Route path="/cart" component={Cart}>
          <Cart />
        </Route>
        <Route path="/details" component={Details}>
          <Details />
        </Route>{" "}
        <Route path="/modal" component={Modal}>
          <Modal />
        </Route> */}
      </Switch>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
