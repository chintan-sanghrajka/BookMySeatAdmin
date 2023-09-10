import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./../../helper.js";

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}get-all-users`);
      return res.data.userList;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const banUser = createAsyncThunk(
  "banUser",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}ban-user`, {
        userId: args.userId,
        ban: args.ban,
      });
      return res.data.status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
