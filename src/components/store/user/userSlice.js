import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, banUser } from "./userAction.js";

const initialState = {
  userList: [],
  isLoading: false,
  success: null,
  error: null,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    [banUser.pending]: (state) => {
      state.isLoading = true;
    },
    [banUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [banUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default userReducer.reducer;
