import { createSlice } from "@reduxjs/toolkit";
import {
  getAllSubCategories,
  changeSubCategoryStatus,
} from "./subcategoryAction.js";

const initialState = {
  subCategoryList: [],
  isLoading: false,
  success: null,
  error: null,
};

export const subCategoryReducer = createSlice({
  name: "subCategoryReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSubCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllSubCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subCategoryList = action.payload;
    },
    [getAllSubCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    [changeSubCategoryStatus.pending]: (state) => {
      state.isLoading = true;
    },
    [changeSubCategoryStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [changeSubCategoryStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default subCategoryReducer.reducer;
