import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar/Sidebar";
import FriendSidebar from "./FriendSidebar/FriendSidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../features/Auth/authSlice";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      window.location.href = "/login";
    } else {
      dispatch(setUserDetails({ user: user, token: token }));
    }
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <FriendSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
