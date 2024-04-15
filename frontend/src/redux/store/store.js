import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice.js";
import printSlice from "../features/print/printSlice.js";
import orderSlice from "../features/print/orderSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    print: printSlice,
    order: orderSlice,

    //TODO: add more slices here for posts
  },
});
export default store;
