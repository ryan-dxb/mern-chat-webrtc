import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // check local storage for user details and token or set to null
  userDetails: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;

      console.log("action.payload", action.payload);

      // save user details to local storage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
  },
});

export const { setUserDetails } = authSlice.actions;

export default authSlice.reducer;
