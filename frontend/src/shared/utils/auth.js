import axios from "axios";

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.pathname = "/login";
};
