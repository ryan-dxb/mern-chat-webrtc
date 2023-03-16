import React, { useEffect, useState } from "react";
import { validateEmail } from "../../shared/utils/validators";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitationHandler,
}) => {
  const [friendEmail, setFriendEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = (e) => {};

  const handleCloseDialog = (e) => {
    closeDialogHandler();
    setFriendEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(friendEmail));
  }, [friendEmail, isFormValid]);
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter the email address of the person you want to invite.
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Friend's Email"
            value={friendEmail}
            setValue={setFriendEmail}
            type="email"
            placeholder="Enter your friend's email"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClickHandler={handleSendInvitation}
            disabled={!isFormValid}
            label="Send Invitation"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
