import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
    deleteCart: (state, action) => {
      state.cartItems = [];
    },
    deleteItem: (state, action) => {
      let newCart = state.cartItems.filter(
        (items) => items.id !== action.payload
      );
      state.cartItems = newCart;
    },
  },
});

export const { setCart, deleteCart,deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
