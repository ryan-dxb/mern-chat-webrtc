import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import AlertNotification from "./shared/components/AlertNotification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={Router}>
      <AlertNotification />
    </RouterProvider>
  </Provider>
);
