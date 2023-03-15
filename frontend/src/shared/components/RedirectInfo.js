import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  cursor: "pointer",
  fontWeight: "500",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        color: "#72767D",
      }}
      style={additionalStyles}
    >
      {text}{" "}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
