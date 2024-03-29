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
    addToCart(state, actions) {
      const newItems = actions.payload;
      const existingItems = state.itemList.find(
        (item) => item.id === newItems.id
      );

      if (existingItems) {
        existingItems.quantity++;
        existingItems.totalPrice += newItems.price;
      } else {
        state.itemList.push({
          id: newItems.id,
          quantity: 1,
          price : newItems.price,
          totalPrice : newItems.price,
          name: newItems.name
        });

        state.totalQuantity++
      }
    },

    removeCart(state,action) {
      // const items = action.payload;
      state.totalQuantity--;

    },

    showCart(state) {
      state.isCartShow = true;
    },
  },
});

// export const { addToCart, removeCart, showCart } = cartSlice.actions;

export const cartActions = cartSlice.actions;

export default cartSlice;
