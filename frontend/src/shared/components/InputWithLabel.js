import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const Label = styled("p")({
  color: "#B9BBBE",
  fontSize: "16px",
  fontWeight: "600",
  textTransform: "uppercase",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#DCDDDE",
  backgroundColor: "#35393F",
  fontSize: "16px",
  margin: 0,
  padding: "0 5px",
});

const InputWithLabel = ({ value, setValue, label, type, placeholder }) => {
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
