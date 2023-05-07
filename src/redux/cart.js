import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    cart:[]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
