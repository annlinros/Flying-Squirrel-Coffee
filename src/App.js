import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import  ProductList from "./Components/ProductList";

 
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/productlist" component={ProductList}>
          <ProductList />
        </Route>

        <Route path="/cart" component={Cart}>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
