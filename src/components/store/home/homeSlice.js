import { createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "./homeAction.js";

const initialState = {
  homeData: {},
  isLoading: false,
  success: null,
  error: null,
};

export const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [getHomeData.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomeData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.homeData = action.payload;
    },
    [getHomeData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default homeReducer.reducer;
