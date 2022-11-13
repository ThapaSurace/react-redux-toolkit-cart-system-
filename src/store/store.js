import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../features/cartSlice";
import { productApi } from "../features/productApi";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(getTotals())