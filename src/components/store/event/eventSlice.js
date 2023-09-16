import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents, changeEventStatus } from "./eventAction.js";

const initialState = {
  eventList: [],
  isLoading: false,
  success: null,
  error: null,
};

export const eventReducer = createSlice({
  name: "eventReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eventList = action.payload;
    },
    [getAllEvents.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    [changeEventStatus.pending]: (state) => {
      state.isLoading = true;
    },
    [changeEventStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [changeEventStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default eventReducer.reducer;
