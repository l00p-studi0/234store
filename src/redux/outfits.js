import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  outfits: [],
  itemId: "",
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
  },
});

export const { setOutfit, setId } = OutfitSlice.actions;

export default OutfitSlice.reducer;
