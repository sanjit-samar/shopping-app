import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn)

  const cartItem = useSelector( state => state.cart.itemList);
  console.log(cartItem, 's');

  return (
    <div className="App">
      { isLoggedIn ? <Layout /> :  <Auth />}
    </div>
  );
}

export default App;
