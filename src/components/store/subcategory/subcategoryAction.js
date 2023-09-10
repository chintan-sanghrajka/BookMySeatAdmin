import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./../../helper.js";

export const getAllSubCategories = createAsyncThunk(
  "getAllSubCategories",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}get-all-sub-categories`);
      return res.data.subCategoryList;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeSubCategoryStatus = createAsyncThunk(
  "changSubCategoryStatus",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}change-subcategory-status`, {
        subCategoryId: args.subCategoryId,
        status: args.status,
      });
      return res.data.status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
