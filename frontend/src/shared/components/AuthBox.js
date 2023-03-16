import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import AlertNotification from "./AlertNotification";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#5065F2",
});

const AuthBox = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: "700px",
          height: "400px",
          backgroundColor: "#36393F",
          borderRadius: "5px",
          boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
