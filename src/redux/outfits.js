import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  outfits: [],
  itemId:"",
  cart:[]
};

export const OutfitSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {
    setOutfit: (state, action) => {
      state.outfits = action.payload;
    },  
    setId: (state, action) => {
      state.itemId = action.payload;
    },  
    setCart: (state, action) => {
      state.cart = action.payload;
    },  
  },
});

export const { setOutfit} = OutfitSlice.actions;

export default OutfitSlice.reducer;
