import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slices/AuthSilce";
import cartSlice from "../Slices/CartSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer },
});

export default store;