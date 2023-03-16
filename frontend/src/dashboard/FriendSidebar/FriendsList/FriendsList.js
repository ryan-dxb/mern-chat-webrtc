import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "John Doe",
    status: "online",
  },
  {
    id: 2,
    username: "Jane Doe",
    status: "offline",
  },
  {
    id: 3,
    username: "Smith Doe",
    status: "online",
  },
  {
    id: 4,
    username: "Suzan Doe",
    status: "offline",
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendListItem
          key={friend.id}
          username={friend.username}
          status={friend.status}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
