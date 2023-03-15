const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userDetails: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
