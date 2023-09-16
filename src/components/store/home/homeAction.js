import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./../../helper.js";

export const getHomeData = createAsyncThunk(
  "getHomeData",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}get-home-data`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
