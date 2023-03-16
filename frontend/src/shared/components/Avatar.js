import { color, styled } from "@mui/system";
import React from "react";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  borderRadius: "42px",
  display: "flex",
  backgroundColor: "#5865F2",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "20px",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview
      style={{
        height: large ? "80px" : "42px",
        width: large ? "80px" : "42px",
      }}
    >
      {username.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;
