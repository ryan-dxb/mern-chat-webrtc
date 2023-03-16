import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

const PendingInvitationsListItem = ({
  id,
  username,
  email,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptFriendInvitation = () => {
    setButtonsDisabled(true);
    acceptFriendInvitation(id);
  };

  const handleRejectFriendInvitation = () => {
    setButtonsDisabled(true);
    rejectFriendInvitation(id);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "none",
          }}
        >
          <Avatar username={username} />
          <Typography
            style={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8E9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptFriendInvitation={handleAcceptFriendInvitation}
            rejectFriendInvitation={handleRejectFriendInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
