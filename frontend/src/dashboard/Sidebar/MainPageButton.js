import React from "react";
import { Button as MuiButton } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
const MainPageButton = () => {
  return (
    <MuiButton
      style={{
        height: "48px",
        width: "48px",
        borderRadius: "16px",
        margin: "0",
        padding: "0",
        minWidth: "0",
        marginTop: "10px",
        backgroundColor: "#5865F2",
        color: "white",
      }}
    >
      <GroupAddOutlinedIcon fontSize="medium" />
    </MuiButton>
  );
};

export default MainPageButton;
