import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography variant="" sx={{ color: "#B9BBBE" }}>
        Sign in to continue
      </Typography>
    </>
  );
};

export default LoginPageHeader;
