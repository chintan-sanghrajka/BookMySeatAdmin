import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, changeCategoryStatus } from "./categoryAction.js";

const initialState = {
  categoryList: [],
  isLoading: false,
  success: null,
  error: null,
};

export const categoryReducer = createSlice({
  name: "categoryReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categoryList = action.payload;
    },
    [getAllCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    [changeCategoryStatus.pending]: (state) => {
      state.isLoading = true;
    },
    [changeCategoryStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [changeCategoryStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default categoryReducer.reducer;
