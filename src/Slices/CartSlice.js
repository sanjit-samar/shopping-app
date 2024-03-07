import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  itemList: [],
  totalQuantity: 0,
  isCartShow: false,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: defaultState,
  reducers: {
    addToCart(state, { payload }) {
      const newItems = payload;
      const existingItems = state.itemList.find(
        (item) => item.id === newItems.id
      );

      if (existingItems) {
        existingItems.totalQuantity++;
        existingItems.price += newItems.price;
      } else {
        state.itemList.push({
          id: newItems.id,
          name: newItems.name,
          price : newItems.price,
        });
      }
    },

    removeCart(state) {},

    showCart(state) {
      state.isCartShow = true;
    },
  },
});

export const { addToCart, removeCart, showCart } = cartSlice.actions;

export default cartSlice;
