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
   
  },
});

export const { setCart,deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
