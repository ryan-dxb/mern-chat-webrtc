import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToSignIn = () => {
    navigate("/login");
  };

  const InvalidFormMessage = () => {
    return <div>Please enter valid username, email and password</div>;
  };

  const ValidFormMessage = () => {
    return <div>Click to Register</div>;
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? <InvalidFormMessage /> : <ValidFormMessage />}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClickHandler={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account?"
        redirectText={"Sign In"}
        additionalStyles={{ marginTop: "10px" }}
        redirectHandler={handlePushToSignIn}
      />
    </>
  );
};

export default RegisterPageFooter;
