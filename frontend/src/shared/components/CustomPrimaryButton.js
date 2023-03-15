import React from "react";
import { Button } from "@mui/material";

const CustomPrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClickHandler,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#5065F2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "500",
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}} // additional styles
      disabled={disabled}
      onClick={onClickHandler}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
