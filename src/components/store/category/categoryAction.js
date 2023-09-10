import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./../../helper.js";

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}get-all-categories`);
      return res.data.categoryList;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeCategoryStatus = createAsyncThunk(
  "changeCategoryStatus",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}change-category-status`, {
        categoryId: args.categoryId,
        status: args.status,
      });
      return res.data.status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
