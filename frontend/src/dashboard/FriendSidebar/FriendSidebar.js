import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitations from "./PendingInvitations/PendingInvitations";

const MainContainer = styled("div")({
  width: "224px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendSidebar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Message" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitations />
    </MainContainer>
  );
};

export default FriendSidebar;
