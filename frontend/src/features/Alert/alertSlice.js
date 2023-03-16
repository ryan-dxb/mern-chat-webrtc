import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertType: "error",
  alertMessage: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert(state, action) {
      state.showAlert = true;
      state.alertType = action.payload.alertType;
      state.alertMessage = action.payload.alertMessage;
    },
    closeAlert(state) {
      state.showAlert = false;
      state.alertType = "";
      state.alertMessage = "";
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;
