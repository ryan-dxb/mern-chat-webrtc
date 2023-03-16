import React from "react";
import { Snackbar, Alert, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  openAlert,
  closeAlert,
  selectAlert,
} from "../../features/Alert/alertSlice";
import { useDispatch, useSelector } from "react-redux";

const AlertNotification = ({ alertType, alertMessage }) => {
  const { showAlert } = useSelector(selectAlert);

  console.log("showAlert: ", showAlert);

  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(closeAlert());
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={alertType} action={action}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertNotification;
