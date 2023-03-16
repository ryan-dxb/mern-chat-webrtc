import React from "react";
import { styled } from "@mui/system";
import DropDownMenu from "./DropDownMenu";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393F",
  width: "calc(100% - 326px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
});

const AppBar = () => {
  return (
    <MainContainer>
      <div></div>
      <DropDownMenu />
    </MainContainer>
  );
};

export default AppBar;
