import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./../../helper.js";

export const getAllEvents = createAsyncThunk(
  "getAllEvents",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}get-all-events-admin`);
      return res.data.eventList;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeEventStatus = createAsyncThunk(
  "changEventStatus",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}change-event-status`, {
        eventId: args.eventId,
        status: args.status,
      });
      return res.data.status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
