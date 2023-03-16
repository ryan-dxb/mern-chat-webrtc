import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const DUMMY_PENDING_INVITATIONS = [
  {
    _id: 1,
    sender: {
      username: "John Doe",
      email: "john@doe.com",
    },
  },
  {
    _id: 2,
    sender: {
      username: "Jane Doe",
      email: "jane@doe.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",
});

const PendingInvitations = () => {
  return (
    <MainContainer>
      {DUMMY_PENDING_INVITATIONS.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.sender.username}
          email={invitation.sender.email}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitations;
