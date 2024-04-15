// redux/slices/uploadSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPages: 0,
  filesUrl: [],
  orderPageData: [],
};

const printSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setFilesUrl: (state, action) => {
      state.filesUrl = action.payload;
    },
    setOrderPageData: (state, action) => {
      state.orderPageData = action.payload;
    },
  },
});

export const { setTotalPages, setFilesUrl, setOrderPageData } =
  printSlice.actions;
export default printSlice.reducer;
