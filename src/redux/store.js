import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import outfitReducer from "./outfits";
import cartSlice  from "./cart";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  outfit: outfitReducer,
  cartItem: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
