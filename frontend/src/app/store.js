import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import alertReducer from "../features/Alert/alertSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
  devTools: true,
});
