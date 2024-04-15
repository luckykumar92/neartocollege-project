import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: JSON.parse(localStorage.getItem("address")) || {},
  orderData: JSON.parse(localStorage.getItem("orderData")) || {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
  },
});

export const { updateAddress, setOrderData } = orderSlice.actions;
export default orderSlice.reducer;
