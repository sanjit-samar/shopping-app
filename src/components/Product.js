import React from "react";
import "./Product.css";
import {cartActions} from "../Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";


const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();

  const totalQuantity = useSelector(state => state.cart.totalQuantity);


  const handleAddTocart = () => {
    dispatch(cartActions.addToCart({name,id,price}))
  }

  const handleRemoveTocart = () => {
    dispatch(cartActions.removeCart({name,id,price}))
  }

  // const handleDisable = () => {
  //   return totalQuantity <= 0 ? true : false;
  // }


  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <div className="card-btn">
      <button onClick={handleAddTocart}>Add to cart</button>
      <button onClick={handleRemoveTocart} disabled={totalQuantity <= 0 ? true : false}>Remove cart</button>
      </div>
      
    </div>
  );
};

export default Product;
