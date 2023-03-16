import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, IconButton } from "@mui/material";

const InvitationDecisionButtons = ({
  disabled,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  return (
    <Box>
      <IconButton
        style={{
          color: "green",
          borderRadius: "50px",
          border: "1px solid green",
          marginRight: "5px",
        }}
        disabled={disabled}
        onClick={acceptFriendInvitation}
      >
        <CheckIcon style={{ color: "green", fontSize: "15px" }} />
      </IconButton>
      <IconButton
        style={{
          color: "red",
          borderRadius: "50px",
          border: "1px solid red",
          marginRight: "5px",
        }}
        disabled={disabled}
        onClick={rejectFriendInvitation}
      >
        <ClearIcon style={{ color: "red", fontSize: "15px" }} />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
