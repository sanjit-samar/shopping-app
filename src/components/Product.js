import React from "react";
import "./Product.css";
import {cartActions} from "../Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";


const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();
  const cartItem = useSelector( state => state.cart.itemlist);
  console.log(cartItem);

  const handleAddTocart = () => {
    dispatch(cartActions.addToCart({name,id,price}))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddTocart}>Add to cart</button>
    </div>
  );
};

export default Product;
