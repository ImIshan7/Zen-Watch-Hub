import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./view/Home";
import {ShoppingCart} from "./view/ShoppingCart";

function App() {
  return (
    <div>

      <BrowserRouter>
        {/*<Home/>*/}
          {/*<ShoppingCart/>*/}

          <Routes>
              <Route path="/*" Component={Home}></Route>
              <Route path="/cart" Component={ShoppingCart}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
